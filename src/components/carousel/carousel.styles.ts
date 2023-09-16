import styled from "styled-components";

export const CarouselStyledWrapper = styled.div<{
  width: number;
  height: number;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const CarouselStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  overflow-y: hidden;

`;

export const CarouselButtonsWrapper = styled.div``;
export const CarouselButton = styled.button``;
