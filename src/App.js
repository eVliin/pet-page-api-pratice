import React from "react";
import Router from "./Routes/Route";
import * as S from "./Components/Style/Styles";
const App = () => {
  return (
    <S.Body>
      <S.GlobalStyle />
      <Router />
    </S.Body>
  );
};

export default App;
