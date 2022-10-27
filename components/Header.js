import { CiIceCream } from "react-icons/Ci";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <StyledHeadline>
        {" "}
        This is our recipe App
        <IceCream size="5rem" />
        <StyledNavigation>
          <Anchor>Startseite</Anchor>
          <Anchor>Produkte</Anchor>
          <Anchor>Kategorien</Anchor>
        </StyledNavigation>
      </StyledHeadline>
    </div>
  );
}

const IceCream = styled(CiIceCream)`
  @media (max-width: 600px) {
    display: none;
  }
`;

const Anchor = styled.a`
  color: var(--text-secondary);
  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;
const StyledHeadline = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  border-bottom: 1px solid var(--text-primary);
  background-color: var(--background-light);
  color: blue;
`;
const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
`;
