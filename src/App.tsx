import React from "react";
import Form from "./components/forms";
import ResponseData from "./components/responseData";
import "./styles/global.css";

function App() {
  return (
    <>
      <header>
        <h1>Simulador de Investimentos</h1>
      </header>
      <section id="app">
        <Form />
        <ResponseData />
      </section>
    </>
  );
}

export default App;
