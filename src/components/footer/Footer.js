import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/github-mark-white.png";
import navIcon3 from "../../assets/img/nav-icon2.svg";
import "./footer.css";

export const Footer = () => {
  return (
    <section className="footer">
      <h2 className="logo-bottom">AG</h2>
      <div className="social-icon-bottom">
        <a href="https://www.linkedin.com/in/arashghafoori/" target="_blank">
          <img src={navIcon1} alt="" />
        </a>
        <a href="https://github.com/arashinho-gh" target="_blank">
          <img src={navIcon2} alt="" />
        </a>
        <a href="https://www.facebook.com/arashghafoori2001/" target="_blank">
          <img src={navIcon3} alt="" />
        </a>
      </div>
    </section>
  );
};
