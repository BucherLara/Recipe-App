import styled from "styled-components";
export default function Headline() {
  return (
    <>
      <HeadlineStyled>Hello</HeadlineStyled>
      <ParagraphStyled>Lorem didorium</ParagraphStyled>
    </>
  );
}

const HeadlineStyled = styled.h1`
  color: skyblue;
  text-align: center;
`;
const ParagraphStyled = styled.p`
  color: tomato;
  text-align: center;
`;
