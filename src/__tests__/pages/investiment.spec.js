import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Form from "../../components/forms";
import {
  SimulationContext,
  SimulationProvider,
} from "../../providers/simulationProvider";
import Graph from "../../components/resultGraph";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(axios);

describe("form component", () => {
  test("shold be able to render form component", async () => {
    render(
      <SimulationProvider>
        <SimulationContext.Consumer>
          {(value) => <Form />}
        </SimulationContext.Consumer>
      </SimulationProvider>
    );

    const form = screen.getByTestId("form-container");
    await waitFor(() => expect(form).toBeInTheDocument());
  });
});

describe("graphic component", () => {
  test("shold be able to render graphic component", async () => {
    render(
      <SimulationProvider>
        <SimulationContext.Consumer>
          {(value) => <Graph />}
        </SimulationContext.Consumer>
      </SimulationProvider>
    );

    const graph = screen.getByTestId("graphic-component");
    await waitFor(() => expect(graph).toBeInTheDocument());
  });
});
