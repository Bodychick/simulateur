import React, { useState } from "react";
import styled from "styled-components";

export function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    nav{
        padding:10px 15px;
        h1{
            margin:0 0 15px 0;
        }
        button {
            background-color:#003483;
            border:none;
            text-decoration:none;
            i{
                color:white;
            }
        }
    }

    @media (max-width: 768px) {
      width: 100%;
      height: ${isMenuOpen ? "auto" : "auto"};
    }
  `;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Sidebar>
      <nav>
        <h1>Tecnoland</h1>
        {isMenuOpen && (
        <div>
            Liste des simulateurs : 
        
            <ul>
                <li>Maintien en température</li>
            </ul>
        </div>)}
        <button onClick={toggleMenu}><i className="fa-solid fa-bars"></i></button>
      </nav>  
    </Sidebar>
  );
}
