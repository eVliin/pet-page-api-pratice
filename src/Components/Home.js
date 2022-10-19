import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./Style/Styles";

const Home = () => {
  const [datadog, setDatadog] = useState([]);
  const [datacat, setDatacat] = useState([]);

  const APId = "https://dog.ceo/api/breeds/image/random/10";
  const APIc = "https://api.thecatapi.com/v1/images/search?limit=10";

  useEffect(() => {
    axios
      .get(APId)
      .then((resposta) => {
        setDatadog(resposta.data.message);
      })
      .catch((error) => {
        console.log("desculpe aconteceu um problema na requisição", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(APIc)
      .then((resposta) => {
        setDatacat(resposta.data);
      })
      .catch((error) => {
        console.log("desculpe aconteceu um problema na requisição", error);
      });
  }, []);

  return (
    <div>
      <S.Homemain>
        <h2>Adote um amigo !</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <S.Circle src="https://www.dci.com.br/wp-content/uploads/2020/09/fora-da-nota-de-r-200-vira-lata-caramelo-deve-virar-moeda.jpg" />
        <p>
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc. If
          you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc. If
          you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc. If
          you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
        <S.Scroll>
          {datadog.map((item) => (
            <S.Fotoh src={item} />
          ))}
        </S.Scroll>
        <S.Scroll>
          {datacat.map((item) => (
            <S.Fotoh src={item.url} />
          ))}
        </S.Scroll>
        <button>Seja Voluntário</button>
      </S.Homemain>
    </div>
  );
};

export default Home;
