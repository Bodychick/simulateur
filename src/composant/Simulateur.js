import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ExplanationContainerF from './NeedTecnoland'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 20px;
  gap:20px;
  flex-wrap:wrap;
  @media (max-width: 768px) {
    margin-top:100px;
  }
`;

const CalculatorContainer = styled.div`
  flex: 2;
  margin-left:200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  flex-wrap:wrap;
  h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }

  label {
    font-size: 20px;
    color: #555;
    margin-bottom: 15px;
  }

  input.input-field {
    width: 90%;
    padding: 10px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 15px;
    margin: auto;
  }

  button {
    width: 150px;
    padding: 10px;
    background-color: #003483;
    color: #fff;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin:0 auto;
    width:100%;
  }
`;

const Colonnes = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  flex-wrap:wrap;
  display:flex;
  flex-direction:column;
  gap:30px;
  align-content:center;
  width:80%;
`;

export default function TempMaintienCalculator() {
  const [diamTuyauterie, setDiamTuyauterie] = useState('');
  const [epaisseur, setEpaisseur] = useState('');
  const [lambda, setLambda] = useState(0.83);
  const [tempMaintien, setTempMaintien] = useState('');
  const [tempMini, setTempMini] = useState('');
  const [resultat, setResultat] = useState('');

  useEffect(() => {
    if (diamTuyauterie && epaisseur && lambda && tempMaintien && tempMini) {
      const C3 = parseFloat(diamTuyauterie);
      const C4 = parseFloat(epaisseur);
      const C5 = parseFloat(lambda);
      const C6 = parseFloat(tempMaintien);
      const C7 = parseFloat(tempMini);

      const result =
        (2 * Math.PI * C5 * (C6 - C7) / Math.log((C3 + 2 * C4) / C3)) *
        1.16 *
        1.1;

      setResultat(result.toFixed(2));
    } else {
      setResultat('');
    }
  }, [diamTuyauterie, epaisseur, lambda, tempMaintien, tempMini]);

  const handleCalculate = () => {
    // Ajoutez ici le code de calcul si nécessaire
  };

  return (
        <Container>
            <CalculatorContainer>
                <h1>Maintien en température</h1>
                <p>
                <label htmlFor="diam_tuyauterie">Diamètre de la tuyauterie (mm)</label>
                <input
                    type="number"
                    id="diam_tuyauterie"
                    className="input-field"
                    value={diamTuyauterie}
                    onChange={(e) => setDiamTuyauterie(e.target.value)}
                />
                </p>
                <p>
                <label htmlFor="epaisseur">Épaisseur de calorifuge (mm)</label>
                <input
                    type="number"
                    id="epaisseur"
                    className="input-field"
                    value={epaisseur}
                    onChange={(e) => setEpaisseur(e.target.value)}
                />
                </p>
                <p>
                <label htmlFor="lambda">Lambda calorifuge</label>
                <input
                    type="number"
                    id="lambda"
                    className="input-field"
                    value={lambda}
                    onChange={(e) => setLambda(e.target.value)}
                    readOnly
                />
                </p>
                <p>
                <label htmlFor="temp_maintien">Température de maintien</label>
                <input
                    type="number"
                    id="temp_maintien"
                    className="input-field"
                    value={tempMaintien}
                    onChange={(e) => setTempMaintien(e.target.value)}
                />
                </p>
                <p>
                <label htmlFor="temp_mini">Température mini ambiante</label>
                <input
                    type="number"
                    id="temp_mini"
                    className="input-field"
                    value={tempMini}
                    onChange={(e) => setTempMini(e.target.value)}
                />
                </p>
                <button onClick={handleCalculate}>Calculer</button>
                <br />
                <p>
                <label htmlFor="resultat">Résultat : </label>
                <input type="number" id="resultat" value={resultat} readOnly />
                </p>
            </CalculatorContainer>
            <Colonnes>
                <ExplanationContainerF
                titre="Comment utiliser le simulateur"
                description="Ici, vous pouvez ajouter des explications sur la façon d'utiliser le simulateur. Expliquez les étapes, les valeurs nécessaires, et fournissez des conseils pour obtenir des résultats précis."
                />
                <ExplanationContainerF
                logoTecno="yes"
                titre="Demandez votre devis gratuitement"
                description="Spécialiste conseils et fourniture de matériel en Instrumentation, Détection, Sécurité Machine et Automatisme Industriel pour toutes les industries et spécialiste IO-Link."
                />
            </Colonnes>   
        </Container>
  );
}
