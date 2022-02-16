context("Simulate", () => {
  it("Put data in inputs and tries simulate values", () => {
    cy.visit("http://localhost:3001");
    cy.viewport(1440, 900);
  });

  it("Tries to add information in inputs", () => {
    cy.viewport(1440, 900);

    cy.intercept("GET", "/simulacoes?tipoIndexacao=bruto&tipoRendimento=ipca", {
      statusCode: 200,
      body: {
        tipoIndexacao: "ipca",
        tipoRendimento: "bruto",
        valorFinalBruto: 2004.24,
        aliquotaIR: 0,
        valorPagoIR: 0,
        valorTotalInvestido: 1000.0,
        valorFinalLiquido: 2004.24,
        ganhoLiquido: 1004.24,
        graficoValores: {
          comAporte: {
            0: 1000,
            1: 1100.2919342696182,
            2: 1200.6131471917915,
            3: 1300.9636473140404,
            4: 1401.343443186277,
            5: 1501.7525433609044,
            6: 1602.190956392717,
            7: 1702.6586908394388,
            8: 1803.155755260795,
            9: 1903.6821582191965,
            10: 2004.2379082796901,
          },
          semAporte: {
            0: 1000,
            1: 1000.2919342696304,
            2: 1000.5839537648784,
            3: 1000.8760585106247,
            4: 1001.1682485317566,
            5: 1001.4605238531689,
            6: 1001.7528844997634,
            7: 1002.0453304964501,
            8: 1002.3378618681451,
            9: 1002.6304786397724,
            10: 1002.9231808362633,
          },
        },
      },
    }).as("simulate-data");

    cy.contains("Bruto").click();
    cy.contains("Fixado").click();

    cy.get("input[data-testid=aporte-inicial-input]").type(1200, {
      delay: 250,
    });

    cy.get("input[data-testid=prazo-input]").type(12, { delay: 250 });

    cy.get("input[data-testid=aporte-mensal-input]").type(500, { delay: 250 });

    cy.get("input[data-testid=rentabilidade-input]").type(6, { delay: 250 });

    cy.get("button[type=submit]").click();

    cy.contains("Resultado da simulação");
  });
});
