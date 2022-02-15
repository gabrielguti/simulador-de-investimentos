import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface SimulationProviderProps {
  children: ReactNode;
}

interface SimulationContextData {
  getSimulationFunction: (newData: DataProps) => void;
  getIpcaAndCdi: () => void;
  graphAp: any;
  graphNap: any;
  ipca: string;
  cdi: string;
  simulateData: any;
}
interface DataProps {
  indexacao: string;
  rendimento: string;
}

export const SimulationContext = createContext<SimulationContextData>(
  {} as SimulationContextData
);
export const SimulationProvider = ({ children }: SimulationProviderProps) => {
  const [ipca, setIpca] = useState<string>("");
  const [cdi, setCdi] = useState<string>("");
  const [simulateData, setSimulateData] = useState();
  const [graphAp, setGraphAp] = useState([]);
  const [graphNap, setGraphNap] = useState([]);

  const getIpcaAndCdi = useCallback(() => {
    fetch("http://localhost:3000/indicadores")
      .then((response) => response.json())
      .then((response) => {
        setIpca(response[1].valor);
        setCdi(response[0].valor);
      })
      .catch((error) => console.log(error));
  }, []);

  const getSimulationFunction = (newData: DataProps) => {
    console.log(newData.indexacao, newData.rendimento);
    fetch(
      `http://localhost:3000/simulacoes?tipoIndexacao=${newData.indexacao}&tipoRendimento=${newData.rendimento}`
    )
      .then((response) => response.json())
      .then((response) => {
        setSimulateData(response);
        setGraphAp(response[0].graficoValores.comAporte);
        setGraphNap(response[0].graficoValores.semAporte);
      })
      .catch((error) => console.log(error));
  };

  return (
    <SimulationContext.Provider
      value={{
        getSimulationFunction,
        getIpcaAndCdi,
        ipca,
        cdi,
        simulateData,
        graphAp,
        graphNap,
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
};

export const UseSimulationContext = () => useContext(SimulationContext);
