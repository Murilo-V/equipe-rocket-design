import styled from "styled-components";

const NavbarStyle = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: 7;
  top: 0;
  left: 0;
  right: 0;

  img {
    width: 10rem;
    margin: 0;
  }

  div {
    background-color: #8254f6;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 4rem;
    margin: 0;

    p {
      margin: 1rem 2rem;
      color: #fff;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export default NavbarStyle;
