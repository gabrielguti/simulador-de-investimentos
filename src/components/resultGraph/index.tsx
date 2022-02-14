import { useState } from "react";
import { UseSimulationContext } from "../../providers/simulationProvider";
import { DivGraph } from "./style";
import "./style.css";
const Graph = () => {
  const { graphAp, graphNap } = UseSimulationContext();

  return (
    <>
    <div id="graph-title">Projeção de Valores</div>
    <div className="graphic">
      {graphAp ? (
        <>
        
        <div className="legend-color">
          <p><span id="aport-legend">ap</span> Com Aporte</p>
          
          <p><span id="no-aport-legend">np</span> Sem Aporte</p>
        </div>
        <div className="legend-text">Tempo (meses)</div>
          <div className="number-title">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="sem-aporte">
            <DivGraph color="black" heigth={graphNap[10] * 0.04} />
            <DivGraph color="black" heigth={graphNap[9] * 0.04} />
            <DivGraph color="black" heigth={graphNap[8] * 0.04} />
            <DivGraph color="black" heigth={graphNap[7] * 0.04} />
            <DivGraph color="black" heigth={graphNap[6] * 0.04} />
            <DivGraph color="black" heigth={graphNap[5] * 0.04} />
            <DivGraph color="black" heigth={graphNap[4] * 0.04} />
            <DivGraph color="black" heigth={graphNap[3] * 0.04} />
            <DivGraph color="black" heigth={graphNap[2] * 0.04} />
            <DivGraph color="black" heigth={graphNap[1] * 0.04} />
            <DivGraph color="black" heigth={graphNap[0] * 0.04} />
          </div>

          <div className="Aporte">
            <DivGraph
              color="rgba(242, 151, 68, 1)"
              heigth={graphAp[10] * 0.1}
            />
            <DivGraph color="rgba(242, 151, 68, 1)" heigth={graphAp[9] * 0.1} />
            <DivGraph color="rgba(242, 151, 68, 1)" heigth={graphAp[8] * 0.1} />
            <DivGraph color="rgba(242, 151, 68, 1)" heigth={graphAp[7] * 0.1} />
            <DivGraph color="rgba(242, 151, 68, 1)" heigth={graphAp[6] * 0.1} />
            <DivGraph color="rgba(242, 151, 68, 1)" heigth={graphAp[5] * 0.1} />
            <DivGraph color="rgba(242, 151, 68, 1)" heigth={graphAp[4] * 0.1} />
            <DivGraph color="rgba(242, 151, 68, 1)" heigth={graphAp[3] * 0.1} />
            <DivGraph color="rgba(242, 151, 68, 1)" heigth={graphAp[2] * 0.1} />
            <DivGraph color="rgba(242, 151, 68, 1)" heigth={graphAp[1] * 0.1} />
            <DivGraph color="rgba(242, 151, 68, 1)" heigth={graphAp[0] * 0.1} />
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
