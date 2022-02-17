import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "../../components/forms";
import {
  SimulationContext,
  SimulationProvider,
} from "../../providers/simulationProvider";
import Graph from "../../components/resultGraph";
import ResponseData from "../../components/responseData";

describe("form component", () => {
  it("shold be able to render form component", () => {
    render(
      <SimulationProvider>
        <SimulationContext.Consumer>
          {(value) => <Form />}
        </SimulationContext.Consumer>
      </SimulationProvider>
    );

    const form = screen.getByTestId("form-container");
    expect(form).toBeInTheDocument();
  });
});

describe("graphic component", () => {
  it("shold be able to render graphic component", () => {
    render(
      <SimulationProvider>
        <SimulationContext.Consumer>
          {(value) => <Graph />}
        </SimulationContext.Consumer>
      </SimulationProvider>
    );

    const graph = screen.getByTestId("graphic-component");
    expect(graph).toBeInTheDocument();
  });
});

describe("response div", () => {
  it("should be able to render the response box", () => {
    render(
      <SimulationProvider>
        <SimulationContext.Consumer>
          {(value) => <ResponseData />}
        </SimulationContext.Consumer>
      </SimulationProvider>
    );

    const responseCard = screen.getByTestId("response-card");
    expect(responseCard).toBeInTheDocument();
  });
});

describe("form fields", () => {
  it("should be able to render input fields", () => {
    render(
      <SimulationProvider>
        <SimulationContext.Consumer>
          {(value) => <Form />}
        </SimulationContext.Consumer>
      </SimulationProvider>
    );

    const brutoButton = screen.getByTestId("bruto-button");
    const preButton = screen.getByTestId("pre-button");
    const aporteInicialInput = screen.getByTestId("aporte-inicial-input");
    const prazoInput = screen.getByTestId("prazo-input");
    const aporteMensalInput = screen.getByTestId("aporte-mensal-input");
    const rentabilidadeInput = screen.getByTestId("rentabilidade-input");
    const sendButton = screen.getByTestId("send-button");

    expect(brutoButton).toBeInTheDocument();
    expect(preButton).toBeInTheDocument();
    expect(aporteInicialInput).toBeInTheDocument();
    expect(prazoInput).toBeInTheDocument();
    expect(aporteMensalInput).toBeInTheDocument();
    expect(rentabilidadeInput).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });
});
