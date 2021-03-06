import "./style.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { UseSimulationContext } from "../../providers/simulationProvider";

const Form = () => {
  const { getSimulationFunction, ipca, getIpcaAndCdi, cdi } =
    UseSimulationContext();

  const [rendimento, setRendimento] = useState<string>("");
  const [indexacao, setIndexacao] = useState<string>("");
  const [checkBruto, setCheckBruto] = useState<boolean>(false);
  const [checkLiquido, setCheckLiquido] = useState<boolean>(false);
  const [checkPre, setCheckPre] = useState<boolean>(false);
  const [checkPos, setCheckPos] = useState<boolean>(false);
  const [checkFix, setCheckFix] = useState<boolean>(false);

  useEffect(() => {
    if (!ipca && !cdi) {
      getIpcaAndCdi();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buttonHandlerIndexacao = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setIndexacao("");
    setIndexacao(button.name);
    if (button.name === "pos") {
      setCheckPre(false);
      setCheckFix(false);
      setCheckPos(false);
      setCheckPos(true);
    } else if (button.name === "pre") {
      setCheckFix(false);
      setCheckPos(false);
      setCheckPre(false);
      setCheckPre(true);
    } else {
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
      setCheckLiquido(false);
      setCheckBruto(false);
      setCheckBruto(true);
    } else {
      setCheckBruto(false);
      setCheckLiquido(false);
      setCheckLiquido(true);
    }
  };

  const Schema = yup.object().shape({
    aporte_inicial: yup.number().typeError("Aporte inicial deve ser um n??mero"),
    prazo: yup
      .number()
      .typeError("Prazo deve ser um n??mero")
      .max(12, "Prazo calculado em meses por ano"),
    aporte_mensal: yup.number().typeError("Aporte mensal deve ser um n??mero"),
    rentabilidade: yup.number().typeError("Rentabilidade deve ser um n??mero"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmitFunction = () => {
    const newData = {
      indexacao: indexacao,
      rendimento: rendimento,
    };
    getSimulationFunction(newData);
  };
  const handleReset = () => {
    reset();
    setCheckLiquido(false);
    setCheckBruto(false);
    setCheckPre(false);
    setCheckPos(false);
    setCheckFix(false);
  };

  return (
    <section id="FormContainer">
      <div id="title-form">
        <h2>Simulador</h2>
      </div>
      <form
        data-testid="form-container"
        className="FormBox"
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <div className="formComponents">
          <div className="title">
            Rendimento <InfoOutlinedIcon />
          </div>
          <div className="ButtonBox">
            <button
              type="button"
              name="bruto"
              onClick={buttonHandlerRendimento}
              id="LeftButton"
              className={checkBruto ? "orange" : ""}
              data-testid="bruto-button"
            >
              {checkBruto ? <CheckIcon id="checkIcon" /> : <></>}
              Bruto
            </button>
            <button
              type="button"
              name="liquido"
              onClick={buttonHandlerRendimento}
              id="RightButton"
              className={checkLiquido ? "orange" : ""}
            >
              {checkLiquido ? <CheckIcon id="checkIcon" /> : <></>}
              L??quido
            </button>
          </div>
          <div className="InputsBox">
            <label
              id={errors.aporte_inicial ? "red-label" : ""}
              htmlFor="aporte-inicial"
            >
              Aporte Inicial
            </label>
            <input
              id={errors.aporte_inicial ? "red-input" : "inputField"}
              data-testid="aporte-inicial-input"
              {...register("aporte_inicial")}
            />
            <span id="error-message">{errors.aporte_inicial?.message}</span>
            <label id={errors.prazo ? "red-label" : ""} htmlFor="prazo">
              Prazo (em meses)
            </label>
            <input
              {...register("prazo")}
              id={errors.prazo ? "red-input" : "inputField"}
              data-testid="prazo-input"
            />
            <span id="error-message">{errors.prazo?.message}</span>
            <label htmlFor="ipca">IPCA (ao ano)</label>
            <input id="inputField" name="ipca" disabled value={`${ipca}%`} />
          </div>
        </div>
        <div className="formComponents">
          <div className="title">
            Tipos de indexa????o <InfoOutlinedIcon />
          </div>
          <div className="ButtonBox">
            <button
              type="button"
              onClick={buttonHandlerIndexacao}
              id="LeftButtonPre"
              name="pre"
              className={checkPre ? "orange" : ""}
              data-testid="pre-button"
            >
              {checkPre ? <CheckIcon id="checkIcon" /> : <></>}
              PR??
            </button>
            <button
              type="button"
              onClick={buttonHandlerIndexacao}
              name="pos"
              id="MiddleButtonPos"
              className={checkPos ? "orange" : ""}
            >
              {checkPos ? <CheckIcon id="checkIcon" /> : <></>}
              P??S
            </button>
            <button
              type="button"
              onClick={buttonHandlerIndexacao}
              name="ipca"
              id="RightButtonFix"
              className={checkFix ? "orange" : ""}
            >
              {checkFix ? <CheckIcon id="checkIcon" /> : <></>}
              FIXADO
            </button>
          </div>

          <div className="InputsBox">
            <label
              id={errors.aporte_mensal ? "red-label" : ""}
              htmlFor="aporte-mensal"
            >
              Aporte Mensal
            </label>
            <input
              {...register("aporte_mensal")}
              id={errors.aporte_mensal ? "red-input" : "inputField"}
              data-testid="aporte-mensal-input"
            />
            <span id="error-message">{errors.aporte_mensal?.message}</span>
            <label
              id={errors.rentabilidade ? "red-label" : ""}
              htmlFor="rentabilidade"
            >
              Rentabilidade(%)
            </label>
            <input
              {...register("rentabilidade")}
              id={errors.rentabilidade ? "red-input" : "inputField"}
              data-testid="rentabilidade-input"
            />
            <span id="error-message">{errors.rentabilidade?.message}</span>
            <label htmlFor="cdi">CDI (ao ano)</label>
            <input id="inputField" name="cdi" disabled value={`${cdi}%`} />
          </div>
          <div id="send-clear-buttons">
            <button
              data-testid="clear-button"
              type="button"
              onClick={handleReset}
              id="clearData"
            >
              Limpar campos
            </button>
            <button data-testid="send-button" id="sendData" type="submit">
              Simular
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
