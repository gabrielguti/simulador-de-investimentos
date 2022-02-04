import "./style.css";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Form = () => {
  return (
    <section id="FormContainer">
      <form className="FormBox">
        <div className="formComponents">
            <div className="title">Rendimento <InfoOutlinedIcon/></div>
          <div className="ButtonBox">
            <div id="LeftButton">Ação</div>
            <div id="RightButton">Ação</div>
          </div>
          <div className="InputsBox">
            <label htmlFor="aporte-inicial">Aporte Inicial</label>
            <input
              type="number"
              id="inputField"
              name="aporte-inicial"
              placeholder="Ex: R$5.000,00"
            />
            <label htmlFor="prazo">Prazo (em meses)</label>
            <input
              type="number"
              id="inputField"
              name="prazo"
              min="1"
              max="12"
              placeholder="Ex: 5"
            />
            <label htmlFor="ipca">IPCA (ao ano)</label>
            <input id="inputField" name="ipca" disabled value="10,06%" />
          </div>
        </div>
        <div className="formComponents">
        <div className="title">Tipos de indexação <InfoOutlinedIcon/></div>
          <div className="ButtonBox">
            <div id="LeftButtonPre">Ação</div>
            <div id="MiddleButtonPos">Ação</div>
            <div id="RightButtonFix">Ação</div>
          </div>

          <div className="InputsBox">
            <label htmlFor="aporte-mensal">Aporte Mensal</label>
            <input
              type="number"
              id="inputField"
              name="aporte-mensal"
              placeholder="Ex: R$200,00"
            />
            <label htmlFor="rentabilidade">Rentabilidade</label>
            <input
              type="number"
              id="inputField"
              name="rentabilidade"
              placeholder="Ex: 20%"
            />
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
