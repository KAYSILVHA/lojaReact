import React from 'react'
import styled from 'styled-components'

const Produto = styled.section`
  width: 15rem;
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  border-radius: 1rem;
`;

const Imagem = styled.img`
  width: 15rem;
`;


export default function Card({imagem}){
  return(
    <Produto>
      <Imagem src={imagem} alt="Iphone 15" />
      <h2>Iphone 15</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fugit illo ullam architecto explicabo doloremque?</p>
      <h4>R$7.000,00</h4>
      <button>Comprar</button>
    </Produto>
  )
}