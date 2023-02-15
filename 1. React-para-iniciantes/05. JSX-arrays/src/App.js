import React from "react";
const App = () => {
  // keys são identificadores únicos
  const produtos = [<li key="e1">Notebook</li>, <li key="e2">Video game</li>];
  const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];
  const livros = [
    { nome: "Harry Potter", ano: 1997 },
    { nome: "A Divina Comédia", ano: 1304 },
    { nome: "JoJo's Bizarre Adventure", ano: 1998 },
  ];
  return (
    <div>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
      {/* Filtrando os livros para aparecer apenas quais forem acima do ano 
      1992 */}
      <ul>
        {livros
          .filter(({ ano }) => ano >= 1992)
          .map(({ nome, ano }) => (
            <li key={nome}>
              {nome},{ano}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default App;
