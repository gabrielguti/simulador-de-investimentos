import { useState } from "react";
import { UseSimulationContext } from "../../providers/simulationProvider";
import { DivGraph } from "./style";
import "./style.css";
const Graph = () => {
  const { graphAp, graphNap } = UseSimulationContext();
  const [values, setValues] = useState([]);
  //   let array: any = [];
  //   const setGraphFunction = () => {
  //     if (graphAp) {
  //       for (let item in graphAp) {
  //         array.push(graphAp[item]);
  //       }
  //     } else {
  //       return false;
  //     }
  //   };
  //   setGraphFunction();

  //   if (graphAp) {
  //     console.log(array);
  //   }

  console.log(graphAp);

  return (
    <div className="graphic">
      {graphAp ? (
        <>
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
          <DivGraph color="orange" heigth={graphAp[10] * 0.1} />
          <DivGraph color="orange" heigth={graphAp[9] * 0.1} />
          <DivGraph color="orange" heigth={graphAp[8] * 0.1} />
          <DivGraph color="orange" heigth={graphAp[7] * 0.1} />
          <DivGraph color="orange" heigth={graphAp[6] * 0.1} />
          <DivGraph color="orange" heigth={graphAp[5] * 0.1} />
          <DivGraph color="orange" heigth={graphAp[4] * 0.1} />
          <DivGraph color="orange" heigth={graphAp[3] * 0.1} />
          <DivGraph color="orange" heigth={graphAp[2] * 0.1} />
          <DivGraph color="orange" heigth={graphAp[1] * 0.1} />
          <DivGraph color="orange" heigth={graphAp[0] * 0.1} />
        </div>
        </>
      ) : (
        <>oi</>
      )}
    </div>
  );
};

export default Graph;
