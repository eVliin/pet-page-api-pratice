import React from "react";
import { Link } from "react-router-dom";
import * as S from "../Components/Style/Styles";

const Header = ({ rota, rota2, rota3 }) => {
  return (
    <S.Bar>
      <S.H1>PET PAGE</S.H1>
      <nav>
        <S.Links>
          <S.Linv>
            <Link to="/dog">{rota2}</Link>
          </S.Linv>
          <S.Linv>
            <Link to="/">{rota}</Link>
          </S.Linv>
          <S.Linv>
            <Link to="/cat">{rota3}</Link>
          </S.Linv>
        </S.Links>
      </nav>
    </S.Bar>
  );
};

export default Header;
