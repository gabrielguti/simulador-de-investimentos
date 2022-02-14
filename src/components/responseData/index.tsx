import { UseSimulationContext } from "../../providers/simulationProvider";
import Card from "../card/index";
import Graph from "../resultGraph";
import "./style.css";
const ResponseData = () => {
  const { simulateData } = UseSimulationContext();
  return (
    <div id="response-data">
      {simulateData ? (
        simulateData.map((item: any, index: number) => {
          return (
            <div id="result-box" key={index}>
              <div id="title">
                <h2>Resultado da simulação</h2>
              </div>
              <div id="cards-box">
                <Card
                  title="Valor Final Bruto"
                  value={`R$ ${item.valorFinalBruto}`}
                />
                <Card title="Alíquota do IR" value={`${item.aliquotaIR}%`} />
                <Card
                  title="Valor Pago em IR"
                  value={`R$ ${item.valorPagoIR}`}
                />
                <Card
                  title="Valor Final Líquido"
                  value={`R$ ${item.valorFinalLiquido}`}
                  greenColor={true}
                />
                <Card
                  title="Valor Total Investido"
                  value={`R$ ${item.valorTotalInvestido}`}
                />
                <Card
                  title="Ganho Líquido"
                  greenColor={true}
                  value={`R$ ${item.ganhoLiquido}`}
                />
              </div>
              <Graph />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default ResponseData;
