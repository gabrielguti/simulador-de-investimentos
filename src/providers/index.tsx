import { ReactNode } from "react";
import { SimulationProvider } from "./simulationProvider";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <SimulationProvider>{children}</SimulationProvider>;
};

export default AppProvider
