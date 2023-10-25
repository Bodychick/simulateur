import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin-left:200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f0f0f0;
  padding: 20px;
  height:100vh;
  flex-wrap:wrap;
  .fondVert{
    margin-bottom: 50px;
    color: #fff;
    font-weight: 700;
    font-size: 23px;
    padding: 20px;
    background-color: #a0cf0a;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left:auto;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 20px;
  flex-wrap:wrap;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap:wrap;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PromoBox = styled.div`
  background-color: #003483;
  color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export default function HomePage() {
  return (
    <PageContainer>
      <LeftColumn>
        <h1>Accédez gratuitement à tous les simulateurs Tecnoland</h1>
        <p className='fondVert'>
            Spécialiste conseils et fourniture de matériel en Instrumentation, Détection, Sécurité Machine et Automatisme Industriel pour toutes les industries et spécialiste IO-Link.        </p>
        <p>   
            Depuis plus de 20 ans les équipes techniques et commerciales de TECNOLAND sont toujours à la pointe des innovations et des nouvelles technologies pour vous apporter les produits les mieux adaptés à vos problématiques de mesure physique, détection, contrôle, monitoring et gestion de données en réseau .        
        </p>
      </LeftColumn>
      <RightColumn>
        <PromoBox>
          <h2>Tecnoland</h2>
          <p>La solution par excellence pour vos besoins de simulation. Demandez un devis dès aujourd'hui !</p>
          <button>Demandez un devis</button>
        </PromoBox>
        <PromoBox>
          <h2>Simulateurs de pointe</h2>
          <p>Découvrez nos simulateurs de pointe pour répondre à tous vos besoins en matière de test et de simulation.</p>
          <button>Demandez un devis</button>
        </PromoBox>
      </RightColumn>
    </PageContainer>
  );
}
