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
    fetch(
      `http://localhost:3000/simulacoes?tipoIndexacao=${newData.indexacao}&tipoRendimento=${newData.rendimento}`
    )
      .then((response) => response.json())
      .then((response) => setSimulateData(response))
      .catch((error) => console.log(error));
  };

  return (
    <SimulationContext.Provider
      value={{ getSimulationFunction, getIpcaAndCdi, ipca, cdi, simulateData }}
    >
      {children}
    </SimulationContext.Provider>
  );
};

export const UseSimulationContext = () => useContext(SimulationContext);
