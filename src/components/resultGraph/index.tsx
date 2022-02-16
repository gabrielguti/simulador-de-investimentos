import { UseSimulationContext } from "../../providers/simulationProvider";
import { DivGraph } from "./style";
import "./style.css";
const Graph = () => {
  const { graphAp, graphNap } = UseSimulationContext();
  const valuesAp = [];
  const valuesNap = [];

  if (graphAp) {
    for (let item in graphAp) {
      valuesAp.push(graphAp[item]);
    }

    for (let item in graphNap) {
      valuesNap.push(graphNap[item]);
    }
  }
  return (
    <>
      <div id="graph-title">Projeção de Valores</div>
      <div data-testid="graphic-component" className="graphic">
        {graphAp ? (
          <>
            <div className="legend-color">
              <p>
                <span id="aport-legend">---</span> Com Aporte
              </p>

              <p>
                <span id="no-aport-legend">---</span> Sem Aporte
              </p>
            </div>
            <div className="legend-text">Tempo (meses)</div>
            <div className="number-title">
              {valuesNap.map((item, index) => {
                return <span key={index * 0.05}>{index}</span>;
              })}
            </div>
            <div className="sem-aporte">
              {valuesNap.map((item, index) => {
                return (
                  <DivGraph key={index} color="black" heigth={item * 0.04} />
                );
              })}
            </div>

            <div className="Aporte">
              {valuesAp.map((item, index) => {
                return (
                  <DivGraph
                    key={index * 0.03}
                    color="rgba(242, 151, 68, 1)"
                    heigth={item * 0.1}
                  />
                );
              })}
            </div>
            <div className="legend-value">Valor(R$)</div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Graph;
