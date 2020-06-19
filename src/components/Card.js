import React from 'react'
import styled from "styled-components"
import { Building3 } from "@styled-icons/remix-line/Building3"
const Card = () => {
    return (
        <CardSection className="card-section">
          <Title className="title">Serviços</Title>
          <CardGrid className="card-grid">
          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo" /></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Controle Tecnológico de Concreto</CardTitle>
              <CardText className="card-text">Monitoramento dos parâmento do resistência estrutural do concreto.</CardText>
            </CardContent>
          </CardItem>

          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo" /></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Controle Tecnológico de Argamassa</CardTitle>
              <CardText className="card-text">Monitoramento dos parâmetros de resistência à compressão e rastreabilidade em obra.</CardText>
            </CardContent>
            
          </CardItem>

          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo" /></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Controle de Alvenaria Estrutural</CardTitle>
              <CardText className="card-text">Monitoramento da resistência à compressão dos blocos e do sistema como um todo.</CardText>
            </CardContent>
            
          </CardItem>

          </CardGrid>

          <CardGrid className="card-grid">
          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo" /></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Controle Tecnológico de Pavers</CardTitle>
              <CardText className="card-text">Monitoramento dos parâmetros de resistência à compressão, absorção de água e retração.</CardText>
            </CardContent>
          </CardItem>

          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo" /></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Dosagem Racional do Concreto</CardTitle>
              <CardText className="card-text">Controle dos materiais utilizados.</CardText>
            </CardContent>
            
          </CardItem>

          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo" /></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Ensaio de arrancamento.</CardTitle>
              <CardText className="card-text">Monitoramento da aderência da argamassa e da cerâmica ao substrato, bem como sua resistência à tração.</CardText>
            </CardContent>
            
          </CardItem>

          </CardGrid>

          <CardGrid className="card-grid">
          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo" /></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">PIT em estacas</CardTitle>
              <CardText className="card-text">Monitoramento da integridade do concreto utilizado em estacas e tubulões.</CardText>
            </CardContent>
          </CardItem>

          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo" /></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Módulo de Elasticidade</CardTitle>
              <CardText className="card-text">Monitoramento da deformação do concreto sob o efeito das tensões nele atuante.</CardText>
            </CardContent>
            
          </CardItem>

          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo" /></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Granulometria</CardTitle>
              <CardText className="card-text">Determinação das dimensões das partículas do agregado e de suas respectivas porcentagens de ocorrência.</CardText>
            </CardContent>
            
          </CardItem>

          </CardGrid>

          <CardGrid className="card-grid">
          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo"/></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Temperatura de blocos de fundação</CardTitle>
              <CardText className="card-text">Monitoramento da temperatura atingida durante o processo de cura de grandes volumes de concreto.</CardText>
            </CardContent>
          </CardItem>

          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo"/></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Ensaio de esclerometria</CardTitle>
              <CardText className="card-text">Caracterização da dureza superficial do concreto e a relação com a resistência à compressão.</CardText>
            </CardContent>
          </CardItem>

          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo"/></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Análise Estrutural</CardTitle>
              <CardText className="card-text">Caracterização dos danos estruturais e modelagem numérica da estrutura.</CardText>
            </CardContent>
          </CardItem>


          </CardGrid>

          <CardGrid className="card-grid">
          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo"/></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Ensaio de ultrassom</CardTitle>
              <CardText className="card-text">Informações sobre a dureza superficial e sua resistência à compressão.</CardText>
            </CardContent>
          </CardItem>

          <CardItem>
            <CardLogo className="card-logo"><Symbol className="card-logo"/></CardLogo>
            <CardContent className="card-content">
              <CardTitle className="card-title">Extração de Testemunho de Concreto</CardTitle>
              <CardText className="card-text">Caracterização precisa da resistência à compressão dos elementos estruturais.</CardText>
            </CardContent>
          </CardItem>
          </CardGrid>
        </CardSection>
    )
}



export default Card

const CardSection = styled.div`
  background: #eaeaea;
  display: grid;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
  grid-template-row: 200px 200px 200px 200px;
  position: flex;
  z-index: 100;
 
  align-items: flex-start;
  justify-content: center;

`
const Title = styled.h1`
  font-size: 40px;
  text-align: start;
 
  border-radius: 40px;
  padding: 10px;
  
`

const CardGrid = styled.div`
  width: 80vw;
  position: relative;
  background: #eaeaea;
  display: grid;
  grid-gap: 70px;
  padding: 0px 0px 10px 0px;
  
  grid-template-columns: repeat(3, 1fr); 
  justify-content: flex-start;
  align-items: flex-start;

  @media(max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0px;
    width: 100vw;
    
  }

`
const Symbol = styled(Building3)`
  color: #af1010;
  font-size: 30px;
  width: 36px;
  height: 36px;
 
  
`
const CardItem = styled.div`
position: relative;
  height: 280px;
  display: flex;
  align-items: center;
  padding: 20px 0px 60px 0px;
  justify-content: center;
  

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
    border-radius: 10px;
    background: #f0f0f0;
    
    .card-logo {
      color: red;
    }
  }
  @media(max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    border-bottom: 1px solid rgba(0,0,0, 0.05);
    
  }
  
`
const CardLogo = styled.div`
padding:  0px 16px;
align-self: flex-start;


@media(max-width: 700px) {
    align-self: center;
    align-items: center;
    justify-content: center;
    padding: 32px 0px 0px 0px; 
  }

`

const CardContent = styled.div`
  align-self: flex-start;
  border-left: 1px solid #e0e0e0;
  padding: 0px 12px;

  @media(max-width: 700px) {
    align-self: center;
    align-items: center;
    border-left: 0px solid #e0e0e0;
    justify-content: center;
    padding: 0px 12px;

  }
`

const CardTitle = styled.h4`
  padding: 14px 0 0 0;
  margin-top: 0;

  @media(max-width: 700px) {
    
    text-align: center;
  }
  
`

const CardText = styled.p`
  color: #777;
  line-height: 20px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media(max-width: 700px) {
    
    text-align: center;
    padding: 0px 0px 12px 0px;
    line-break: auto;
    text-overflow: ellipsis;
  }
  
`

