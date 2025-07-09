"use client";

import { useState } from "react";

export function Button() {
  const [nome, setNome] = useState("Marcelo");

  function handleChangeName() {
    setNome("Carvalho");
  }

  return (
    <div className="text-center">
      <button
        onClick={handleChangeName}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-3 border border-gray-400 rounded shadow"
      >
       
        Alterar nome
      </button>
      <br />
      <h3>Nome: {nome}</h3>
    </div>
  );
}
