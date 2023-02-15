import React from "react";
const App = () => {
  function handleClick(event) {
    console.log(event.target);
  }
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener("scroll", handleScroll);
  /* os eventos(Synthetic Event) no React são próprios, porém agem da mesma forma 
  que eventos comuns e possuem as mesmas funções 
  https://reactjs.org/docs/events.html
  */
  return (
    <>
      <div style={{ height: "200vh" }}>
        <button onClick={handleClick}>Clique</button>
        {/* Também é possivel declarar uma função anônima para o evento */}
        <button onClick={(e) => alert(e.target.innerText)}>Anônima</button>
      </div>
    </>
  );
};
export default App;
