import { ReactNode } from "react";
import { SimulationProvider } from "./simulationProvider";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <SimulationProvider>{children}</SimulationProvider>;
};
