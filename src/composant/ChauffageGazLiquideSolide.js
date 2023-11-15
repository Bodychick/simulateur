import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ExplanationContainerF from './NeedTecnoland';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

const HeatingCalculatorContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-left: 200px;
  `;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    font-size: 18px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const CalculateButton = styled.button`
  width: 150px;
  padding: 10px;
  background-color: #003483;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ResultContainer = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

const Colonnes = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-content: center;
  width: 80%;
`;

const HeatingCalculator = () => {
  const [power, setPower] = useState('');
  const [mass, setMass] = useState('');
  const [specificHeat, setSpecificHeat] = useState('');
  const [temperatureRise, setTemperatureRise] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (power && mass && specificHeat && temperatureRise && time) {
      const convertedPower = parseFloat(power) * 0.86; // Conversion de kcal/h à Watt
      const energyRequired = convertedPower * parseFloat(time); // Énergie requise en Watt-heures
      setResult(energyRequired.toFixed(2) + ' Wh');
    } else {
      setResult('');
    }
  }, [power, mass, specificHeat, temperatureRise, time]);

  const handleCalculate = () => {
    // Vous pouvez ajouter d'autres vérifications ou manipulations ici si nécessaire
    console.log('Calculating...');
  };

  return (
    <Container>
        <HeatingCalculatorContainer>
        <h2>Calculateur de Chauffage</h2>

        <InputContainer>
            <label htmlFor="power">Puissance (kcal/h)</label>
            <input
            type="number"
            id="power"
            value={power}
            onChange={(e) => setPower(e.target.value)}
            />
        </InputContainer>

        <InputContainer>
            <label htmlFor="mass">Masse à chauffer (kg)</label>
            <input
            type="number"
            id="mass"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            />
        </InputContainer>

        <InputContainer>
            <label htmlFor="specificHeat">Chaleur spécifique (kcal/kg.K)</label>
            <input
            type="number"
            id="specificHeat"
            value={specificHeat}
            onChange={(e) => setSpecificHeat(e.target.value)}
            />
        </InputContainer>

        <InputContainer>
            <label htmlFor="temperatureRise">Élévation de température (°C)</label>
            <input
            type="number"
            id="temperatureRise"
            value={temperatureRise}
            onChange={(e) => setTemperatureRise(e.target.value)}
            />
        </InputContainer>

        <InputContainer>
            <label htmlFor="time">Temps de montée en température (heures)</label>
            <input
            type="number"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            />
        </InputContainer>

        <CalculateButton onClick={handleCalculate}>Calculer</CalculateButton>

        {result && <ResultContainer>Résultat : {result}</ResultContainer>}
        </HeatingCalculatorContainer>
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
};

export default HeatingCalculator;
