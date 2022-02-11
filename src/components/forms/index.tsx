import "./style.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

const Form = () => {
  const [ipca, setIpca] = useState<string>("");
  const [cdi, setCdi] = useState<string>("");
  const [rendimento, setRendimento] = useState<string>("");
  const [indexacao, setIndexacao] = useState<string>("");
  const [checkBruto, setCheckBruto] = useState<boolean>(false);
  const [checkLiquido, setCheckLiquido] = useState<boolean>(false);
  const [checkPre, setCheckPre] = useState<boolean>(false);
  const [checkPos, setCheckPos] = useState<boolean>(false);
  const [checkFix, setCheckFix] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:3000/indicadores")
      .then((response) => response.json())
      .then((response) => {
        setIpca(response[1].valor);
        setCdi(response[0].valor);
      })
      .catch((error) => console.log(error));
  });
  const buttonHandlerIndexacao = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setIndexacao("");
    setIndexacao(button.name);
    if (button.name === "pos") {
      setCheckLiquido(false);
      setCheckBruto(false);
      setCheckPre(false);
      setCheckFix(false);
      setCheckPos(false);
      setCheckPos(true);
    } else if (button.name === "pre") {
      setCheckLiquido(false);
      setCheckBruto(false);
      setCheckFix(false);
      setCheckPos(false);
      setCheckPre(false);
      setCheckPre(true);
    } else {
      setCheckLiquido(false);
      setCheckBruto(false);
      setCheckPre(false);
      setCheckPos(false);
      setCheckFix(false);
      setCheckFix(true);
    }
  };

  const buttonHandlerRendimento = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setRendimento("");
    setRendimento(button.name);
    if (button.name === "bruto") {
      setCheckPre(false);
      setCheckPos(false);
      setCheckFix(false);
      setCheckLiquido(false);
      setCheckBruto(false);
      setCheckBruto(true);
    } else {
      setCheckPre(false);
      setCheckPos(false);
      setCheckFix(false);
      setCheckBruto(false);
      setCheckLiquido(false);
      setCheckLiquido(true);
    }
  };

  const Schema = yup.object().shape({
    aporte_inicial: yup.string().required("campo deve ser preenchido"),
    prazo: yup.string().required("campo deve ser preenchido"),
    aporte_mensal: yup.string().required("campo deve ser preenchido"),
    rentabilidade: yup.string().required("campo deve ser preenchido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  //passar função para provider
  const onSubmitFunction = () => {
    fetch(
      `http://localhost:3000/simulacoes?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <section id="FormContainer">
      <form className="FormBox" onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="formComponents">
          <div className="title">
            Rendimento <InfoOutlinedIcon />
          </div>
          <div className="ButtonBox">
            <button
              name="bruto"
              onClick={buttonHandlerRendimento}
              id="LeftButton"
            >
              {checkBruto ? <CheckIcon id="checkIcon" /> : <></>}
              Bruto
            </button>
            <button
              name="liqudo"
              onClick={buttonHandlerRendimento}
              id="RightButton"
            >
              {checkLiquido ? <CheckIcon id="checkIcon" /> : <></>}
              Líquido
            </button>
          </div>
          <div className="InputsBox">
            <label>Aporte Inicial</label>
            <input
              {...register("aporte_inicial")}
              type="number"
              id="inputField"
              // placeholder="Ex: R$5.000,00"
            />
            <span>{errors.aporte_inicial?.message}</span>
            <label htmlFor="prazo">Prazo (em meses)</label>
            <input
              {...register("prazo")}
              type="number"
              id="inputField"
              name="prazo"
              min="1"
              max="12"
              // placeholder="Ex: 5"
            />
            <span>{errors.prazo?.message}</span>
            <label htmlFor="ipca">IPCA (ao ano)</label>
            <input id="inputField" name="ipca" disabled value={`${ipca}%`} />
          </div>
        </div>
        <div className="formComponents">
          <div className="title">
            Tipos de indexação <InfoOutlinedIcon />
          </div>
          <div className="ButtonBox">
            <button
              onClick={buttonHandlerIndexacao}
              id="LeftButtonPre"
              name="pre"
            >
              {checkPre ? <CheckIcon id="checkIcon" /> : <></>}
              Pré
            </button>
            <button
              onClick={buttonHandlerIndexacao}
              name="pos"
              id="MiddleButtonPos"
            >
              {checkPos ? <CheckIcon id="checkIcon" /> : <></>}
              Pós
            </button>
            <button
              onClick={buttonHandlerIndexacao}
              name="fixado"
              id="RightButtonFix"
            >
              {checkFix ? <CheckIcon id="checkIcon" /> : <></>}
              Fixado
            </button>
          </div>

          <div className="InputsBox">
            <label>Aporte Mensal</label>
            <input
              {...register("aporte_mensal")}
              type="number"
              id="inputField"
              // placeholder="Ex: R$200,00"
            />
            <span>{errors.aporte_mensal?.message}</span>
            <label htmlFor="rentabilidade">Rentabilidade(%)</label>
            <input
              {...register("rentabilidade")}
              type="number"
              id="inputField"
              name="rentabilidade"
              // placeholder="Ex: 20%"
            />
            <span>{errors.rentabilidade?.message}</span>
            <label htmlFor="cdi">CDI (ao ano)</label>
            <input id="inputField" name="cdi" disabled value={`${cdi}%`} />
          </div>
          <div id="send-clear-buttons">
            <button id="clearData">Limpar dados</button>
            <button id="sendData" type="submit">
              Simular
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
