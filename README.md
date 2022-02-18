   <body>
   <aside>
    <h1>Simulador de investimentos</h1>
	   <h2> Deploy da aplicação: <a href="https://simulador-de-investimentos.vercel.app/" target="_blank" >Simulador de investimentos</a></h2>
    <p>
      Aplicação front-end criada com o intuito de simular o processo de
      investimento com base em valores reais. De acordo com o tipo de indexação
      e tipo de rendimento escolhido pelo usuário. A aplicação executa o método
      GET na API para que as informações retornem de acordo com o respectivo rendimento e
      indexação. Os dados preenchidos no formulário atrvés dos inputs não serão
      enviados a fake API. Porém, são obrigatórios para que a simulação ocorra.
    </p>
   </aside>
  <aside>
    <h3>Construção da Aplicação:</h3>
    <ul>
      <li>React JS</li>
      <li>Typescript</li>
      <li>CSS</li>
      <li>HTML</li>
      <li>Styled Components (Javascript)</li>
      <li>Context API</li>
      <li>Bibliotecas externas (Yup, Hook Form e Material UI)</li>
    </ul>
  </aside>
  
  <aside>
    <h3>Ferramentas:</h3>
    <ul>
      <li>Eslint</li>
      <li>Prettier</li>
      <li>Cypress</li>
      <li>Jest</li>
      <li>Vercel</li>
    </ul>
  </aside>
  <aside>
    <h2>Utilização:</h2>
    	<h3>Requisitos:</h3>
				<ul>
					<li>NodeJS</li>
					<li>Yarn</li>
					<li>NPM</li>
				</ul>
    <h2>Como executar:</h2>
      <h3>Aplicação:</h3>
        <p>
          Faça o clone/download deste repositório, execute o comando <b>yarn</b> para
          instalar as dependências do projeto. Em seguida, rode o comando <b>yarn
          start</b>. Se preferir, acesse apenas o link do deploy e rode apenas a API.
        </p>
    <h3>Testes:</h3>
    <ul>
      <li><b>yarn test</b> (roda a bateria de testes)</li>
      <li>
        <b>yarn run cypress open</b>(Certifique-se de que a aplicação esteja rodando.
        Procure pelo teste simulate.spec.js)
      </li>
    </ul>
    <h2>Documentação API:</h2>
    <a
      href="https://github.com/eqi-investimentos/desafio-fake-api"
      target="_blank"
      >API</a
    >
   </aside>
  <footer>
    <aside>
    <h3>Aviso:</h3>
    <p>
      Certifique-se (apenas se rodar o projeto na sua máquina) de que os locais
      em que a fake API e a aplicação ficam localizados sejam diferentes. Por
      padrão a fake API fica localizada em http://localhost:3000.
    </p>
    </aside>
    <h4>Gabriel Gutierrez</h4>
  </footer>
</body>
