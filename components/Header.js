import { CiIceCream } from "react-icons/ci";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <StyledHeadline>
        This is our recipe App
        <IceCream size="5rem" />
        <StyledNavigation>
          <Link href="/" passHref legacyBehavior>
            <Anchor>Home</Anchor>
          </Link>
          <Link href="/Desserts" passHref legacyBehavior>
            <Anchor>Desserts</Anchor>
          </Link>
          <Link href="/Veggie" passHref legacyBehavior>
            <Anchor>Veggie</Anchor>
          </Link>
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
