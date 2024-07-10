import { useState } from "react";




function App() {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  function soma() {
    setResultado(Number(numero1) + Number(numero2))
  }

  function subtracao() {
    setResultado(Number(numero1) - Number(numero2))
  }

  function multiplicacao() {
    setResultado(Number(numero1) * (numero2))
  }

  function divisao() {
    setResultado(Number(numero1) / Number(numero2))
  }



  return (
    <>
      <div>
        <input onChange={evento => setNumero1(evento.target.value)} type="text" />
        <input onChange={evento => setNumero2(evento.target.value)} type="text" />
        <h1>{resultado}</h1>
        <button onClick={soma}>somar</button>
        <button onClick={subtracao}>subtrair</button>
        <button onClick={multiplicacao}>multiplicar</button>
        <button onClick={divisao}>dividir</button>
      </div>
    </>
  );
}

export default App;
