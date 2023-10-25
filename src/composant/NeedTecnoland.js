import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ExplanationContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  flex-wrap:wrap;
  h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    color: #555;
    line-height: 1.4;
  }
  @media (max-width: 768px) {
    width:100%;
  }
`;

export default function ExplanationContainerF({titre, description, logoTecno}) {
  return (
        <ExplanationContainer>
            <h2>{titre}</h2>
            <p>
                {description}
            </p>

            {
                logoTecno ==="yes" && <img  src="https://www.tecnoland.fr/wp-content/themes/plune-refonte/assets/img/logo.png"/>
            }
        </ExplanationContainer>
  );
}
