import styled from "styled-components";
export default function Footer() {
  return (
    <div>
      <StyledFooter> Recipe App </StyledFooter>
    </div>
  );
}

const StyledFooter = styled.p`
  border-top: 1px solid #0c2c4d;
  color: #0c2c4d99;
  background-color: var(--background-light);
  padding: 0 1rem;
  height: 4rem;
`;
