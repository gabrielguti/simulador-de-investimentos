import "./style.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// interface FormData {
//   aporteInicial: number;
//   prazo: number;
//   aporteMensal: number;
//   rentabilidade: number;
// }

const Form = () => {
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

  const onSubmitFunction = (data: any) => {
    const newData = {
      aporteInicial: data.aporte_inicial,
      prazo: data.prazo,
      ipca: 10.06,
      aporteMensal: data.aporte_mensal,
      rentabilidade: data.rentabilidade,
      cdi: 9.18,
    };
    console.log(newData);
  };

  return (
    <section id="FormContainer">
      <form className="FormBox" onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="formComponents">
          <div className="title">
            Rendimento <InfoOutlinedIcon />
          </div>
          <div className="ButtonBox">
            <div id="LeftButton">Ação</div>
            <div id="RightButton">Ação</div>
          </div>
          <div className="InputsBox">
            <label>Aporte Inicial</label>
            <input
              {...register("aporte_inicial")}
              type="number"
              id="inputField"
              placeholder="Ex: R$5.000,00"
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
              placeholder="Ex: 5"
            />
            <span>{errors.prazo?.message}</span>
            <label htmlFor="ipca">IPCA (ao ano)</label>
            <input id="inputField" name="ipca" disabled value="10,06%" />
          </div>
        </div>
        <div className="formComponents">
          <div className="title">
            Tipos de indexação <InfoOutlinedIcon />
          </div>
          <div className="ButtonBox">
            <div id="LeftButtonPre">Ação</div>
            <div id="MiddleButtonPos">Ação</div>
            <div id="RightButtonFix">Ação</div>
          </div>

          <div className="InputsBox">
            <label>Aporte Mensal</label>
            <input
              {...register("aporte_mensal")}
              type="number"
              id="inputField"
              placeholder="Ex: R$200,00"
            />
            <span>{errors.aporte_mensal?.message}</span>
            <label htmlFor="rentabilidade">Rentabilidade(%)</label>
            <input
              {...register("rentabilidade")}
              type="number"
              id="inputField"
              name="rentabilidade"
              placeholder="Ex: 20%"
            />
            <span>{errors.rentabilidade?.message}</span>
            <label htmlFor="cdi">CDI (ao ano)</label>
            <input id="inputField" name="cdi" disabled value="9,18%" />
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
