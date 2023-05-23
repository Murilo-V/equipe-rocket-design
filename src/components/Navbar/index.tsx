import ERLogo from "../../assets/logo.svg";
import NavbarStyle from "./style";

const Navbar = () => {
  return (
    <NavbarStyle>
      <img src={ERLogo} alt="Equipe Rocket Logo" />
      <div>
        <a href="#services">Serviços</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#about">Sobre a Equipe Rocket</a>
        <a href="#contact">Contato</a>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
