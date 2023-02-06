import React from "react";
const App = () => {
  const nome = "Jean";
  const rndm = Math.random();
  const ativo = true;
  const titulo = <h1>Im error!</h1>;
  function mostrarNome(pedido) {
    return "Starbucks " + pedido;
  }
  const carro = {
    marca: "Ford",
    rodas: 4,
  };
  return (
    <>
      {/* Pode passar qualquer funçãp JS dentro de {}*/}

      {titulo}
      <p>{mostrarNome("pronto")}</p>
      <p>{nome}</p>
      <p className={ativo ? "ativo" : "inativo"}>{(rndm * 100).toFixed()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>{carro.marca}</p>
      {/* Classname é a mesma coisa de uma class, foi feito para as pessoas não 
    confundirem */}
      <a
        className="meuGitHub"
        href="https://github.com/Je-Carlos"
        title="Meu github">
        GitHub
      </a>
      {/* O mesmo seve para o htmlFor */}
      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" id="nome" />
    </>
  );
};
export default App;
