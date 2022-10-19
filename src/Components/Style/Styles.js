import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family: 'Roboto';
        font-weight: 400;
    }
    *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: transparent;
    }
    *::-webkit-scrollbar-button {
    display: none;
    }
    *::-webkit-scrollbar-track {
      display: none;
    }
    *::-webkit-scrollbar-track-piece {
      display: none;
    }
    *::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    }
    *::-webkit-scrollbar-corner {
      display: none;
    }
`;

export const Body = styled.body`
  position: fixed;
  background-color: #222426;
  color: #ffffff;
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

export const Bar = styled.header`
  position: sticky;
  top: 0;
  background-color: #ffe0ed;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #2f3235;

  nav {
    width: 100%;
    height: max-content;
  }
`;

export const Links = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Linv = styled.li`
  padding: 1%;
  background-color: #ffc4cd;
  border-radius: 3vw;
  a {
    color: #332d2e;
    text-decoration: none;
    font-weight: 550;
  }
`;

export const Foto = styled.img`
  width: auto;
  height: 20vh;
  min-height: 15vw;
  border-radius: 10%;
`;

export const Fotoh = styled(Foto)`
  margin-left: 2vw;
`;

export const H1 = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;

export const H2 = styled.h2`
  font-weight: 500;
  margin: 10px 10px 10px 0px;
`;

export const Homemain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw;
  text-align: center;
`;

export const Circle = styled.img`
  width: 246px;
  height: 246px;
  border-radius: 50%;
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: min-content;
  overflow-x: scroll;
`;
