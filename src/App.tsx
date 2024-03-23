import { useState, FormEvent } from "react";
import "./App.css";

function App() {
  const date = new Date();
  const [ nameInput, setNameInput ] = useState("")
  const [ yearInput, setYearInput ] = useState(date.getFullYear())
  const [ nameResult, setNameResult ] = useState("")
  const [ yearResult, setYearResult ] = useState(0)

  function calcular(event: FormEvent) {
    event.preventDefault()
    const age = date.getFullYear() - yearInput

    setNameResult(nameInput)
    setYearResult(age)
  }

  return (
    <div className="container">
      <h1 className="title">Descubra sua Idade</h1>
      <form className="form" onSubmit={calcular}>
        <label>Digite seu nome?</label>
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          placeholder="Ex: Pedro Henrique"
          required
          value={nameInput}
          onChange={ (e) => setNameInput(String(e.target.value))}
        />

        <label>Digite o ano que Nasceu?</label>
        <input
          className="input"
          type="number"
          name="name"
          id="name"
          placeholder="Ex: 2004"
          step="1"
          min={1900}
          required
          value={yearInput}
          onChange={ (e) => setYearInput(Number(e.target.value)) }
        />

        <input className="button" type="submit" value="Calcular" />
      </form>
      {nameResult && (
        <p className="result">{nameResult}, você tem: {yearResult} {(yearResult > 1) ? "anos" : "ano"}</p>
      )}
    </div>
  );
}

export default App;
