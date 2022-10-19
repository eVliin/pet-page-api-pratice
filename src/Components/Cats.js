import React, { useState } from "react";
import axios from "axios";
import * as S from "./Style/Styles";

const Dogs = () => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const API = "https://api.thecatapi.com/v1/images/search";

  const CatsApi = () => {
    axios
      .get(API)
      .then((resposta) => {
        setData(resposta.data[0].url);
        console.log(data);
      })
      .catch((error) => {
        console.log("Desculpe aconteceu um erro na requisição", error);
      });
  };
  return (
    <S.Homemain>
      <h2>Clique no botão para gerar um Amiguinho</h2>
      <S.Foto src={data} alt="gatinho" />
      <button
        onClick={() => {
          CatsApi();
        }}
      >
        Clique aqui
      </button>
    </S.Homemain>
  );
};

export default Dogs;
