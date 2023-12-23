import { Link } from "react-router-dom";
import "./Footer.scss";
import facebookIcon from "./assets/facebook.svg";
import instagramIcon from "./assets/instagram.svg";
import twitterIcon from "./assets/twitter.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__links-block">
				<div className="footer__links-group">
					<h3>ПРОДУКТ</h3>
					<Link to="#">Стати викладачем</Link>
					<Link to="#">Навчатись</Link>
					<Link className={"footer__links-group--disabled"} to="#">
						<strong>Youni</strong> бізнес
					</Link>
					<Link className="footer__links-group--disabled" to="#">
						Онлайн школам
					</Link>
					<Link className="footer__links-group--disabled" to="#">
						Університетам
					</Link>
				</div>
				<div className="footer__links-group">
					<h3>КОМПАНІЯ</h3>
					<Link to="#">Про Youni</Link>
					<Link to="#">Умови використання</Link>
					<Link to="#">Політика конфіденційності</Link>
					<Link to="#">Повідомити про порушення</Link>
				</div>
				<div className="footer__links-group">
					<h3>СПІЛЬНОТА</h3>
					<Link to="#">Блог Youni</Link>
				</div>
				<div className="footer__links-group">
					<h3>ПІТРИМКА</h3>
					<Link to="#">Центр довідки</Link>
					<Link to="#">Зв'язатись з нами</Link>
				</div>
			</div>
			<div className="footer__about-block">
				<h2>Youni</h2>
				<p>
					Youni.com - Перша українська платформа онлайн освіти, яка допомагає створювати якісні онлайн курси різних
					напрямків та рівнів. Отримувати професійні знання від провірених лекторів та викладачів.
				</p>
				<div className="footer__social-links-block">
					<a href="https://www.instagram.com/" target="_blank">
						<InstagramIcon fontSize="large" />
					</a>
					<a href="https://twitter.com/home" target="_blank">
						<TwitterIcon fontSize="large" />
					</a>
					<a href="https://www.facebook.com/" target="_blank">
						<FacebookIcon fontSize="large" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
