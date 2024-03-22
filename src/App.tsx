import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Descubra sua Idade</h1>
      <form className="form">
        <label>Digite seu nome?</label>
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          placeholder="Ex: Pedro Henrique"
          required
        />

        <label>Digite o ano que Nasceu?</label>
        <input
          className="input"
          type="number"
          name="name"
          id="name"
          placeholder="Ex: 2004"
          required
        />

        <input className="button" type="submit" value="Calcular" />
      </form>
      <p className="result">Pedro Henrique, você tem: 19 anos</p>
    </div>
  );
}

export default App;
