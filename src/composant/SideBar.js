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
    height: auto;
    overflow: hidden;
    transition: max-height 0.3s ease;
    margin: 0;
  }

  .hideDesktop {
    display: none;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width:100%;
    height:${props => (props.isMenuOpen ? "100%" : "60px")};;
    top: 0;
    .hideDesktop {
      display: block;
      height: auto;
    }

    button {
      display: block;
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 1;
    }

    .menuToggle {
      max-height: 0;
    }

    .menuToggle .open {
      max-height: 500px !important;
    }
  }
`;

export default function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const menuToggle = document.querySelector('.menuToggle');
    console.log(menuToggle.classList.contains('open'))
    if(menuToggle.classList.contains('open')){
      menuToggle.classList.remove('open');
    }
    else {
      menuToggle.classList.add('open');
    }
  };

  return (
    <Sidebar isMenuOpen={isMenuOpen}>
      <button className="hideDesktop" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav>
        <h1>
          <a href="/">Tecnoland</a>
        </h1>
        <div className="menuToggle">
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/temp-maintien">Maintien en température</a>
            </li>
            <li>
              <a href="/chauffage-liquide-solide-gaz">Chauffage liquide solide gaz</a>
            </li>
          </ul>
        </div>
    {
      isMenuOpen === true &&
      <div className="hideDesktop">
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/temp-maintien">Maintien en température</a>
        </li>
        <li>
          <a href="/chauffage-liquide-solide-gaz">Chauffage liquide solide gaz</a>
        </li>
      </ul>
    </div>
    }

      </nav>
    </Sidebar>
  );
}