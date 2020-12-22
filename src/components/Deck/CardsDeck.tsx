import React from "react";
import styled from "styled-components";

const CardsWrapper = styled.div`
  display: flex;
`;

const CardImgWrapper = styled.div`
  display: inline-block;
  margin-top: 10px;
  width: 10px; ;
`;

const CardsDeck = () => (
  <CardsWrapper>
    <CardImgWrapper>
      <img height="100" src={`./cards/card-back.jpg`} alt="monte" />
    </CardImgWrapper>
    <CardImgWrapper>
      <img height="100" src={`./cards/card-back.jpg`} alt="monte" />
    </CardImgWrapper>
    <CardImgWrapper>
      <img height="100" src={`./cards/card-back.jpg`} alt="monte" />
    </CardImgWrapper>
    <CardImgWrapper>
      <img height="100" src={`./cards/card-back.jpg`} alt="monte" />
    </CardImgWrapper>
    <CardImgWrapper>
      <img height="100" src={`./cards/card-back.jpg`} alt="monte" />
    </CardImgWrapper>
  </CardsWrapper>
);

export default CardsDeck;
