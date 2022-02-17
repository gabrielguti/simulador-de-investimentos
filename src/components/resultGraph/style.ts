import styled from "styled-components";
type PropsHeigth = {
  heigth: number;
};
export const DivGraph = styled.div.attrs((props: PropsHeigth) => ({
  heigth: props.heigth,
}))<PropsHeigth>`
  height: ${(props) => props.heigth}px;
  background-color: ${(props) => props.color};
  width: 35px;
`;
