import SvgLogo from "../../assets/svgsComponent/Logo";
import "./styles.scss";

const Header = () => {
  return (
    <div className="headerContainer">
      <SvgLogo width={100} height={100} />
    </div>
  );
};

export default Header;
