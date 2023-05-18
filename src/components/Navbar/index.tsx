import ERLogo from "../../assets/logo.svg";
import NavbarStyle from "./style";

const Navbar = () => {
  return (
    <NavbarStyle>
      <img src={ERLogo} alt="Equipe Rocket Logo" />
      <div>
        <p>Serviços</p>
        <p>Portfólio</p>
        <p>Sobre a Equipe Rocket</p>
        <p>Contato</p>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
