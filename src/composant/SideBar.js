import React, { useState } from "react";
import styled from "styled-components";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #003483;
  color: white;
  text-align: center;
  height: 100%;
  width: 200px;
  position: fixed;
  left: 0;

  nav {
    max-width: 100%;
    padding: 10px 15px;
    h1 {
      margin: 0;
      a {
        text-decoration: none;
        color: white;
      }
    }
    button {
      background-color: #003483;
      border: none;
      text-decoration: none;
      cursor: pointer;
      display: flex;
      align-items: middle;
      i {
        color: white;
        font-size: 20px;
      }
    }
    ul {
      padding: 0;
      list-style: none;
      li {
        margin-block-start: 0em;
        margin-bottom: 10px;
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }

  .menuToggle {
    max-height: ${props => (props.isMenuOpen ? "400px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease;
    margin:0;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    top: 0;
    button {
      display: block;
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 1;
    }
  }
`;

export default function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Sidebar isMenuOpen={isMenuOpen}>
      <nav>
        <h1>
          <a href="/">Tecnoland</a>
        </h1>
        <button onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="menuToggle">
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/temp-maintien">Maintien en température</a>
            </li>
          </ul>
        </div>
      </nav>
    </Sidebar>
  );
}
