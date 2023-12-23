import { Link } from "react-router-dom";
import "./Header.scss";
import CourseHeaderComponent from "./components/course-header-component/CourseHeaderComponent";
import MainPageHeaderComponent from "./components/main-page-header-component/MainPageHeaderComponent";
import UserHeaderComponent from "./components/user-header-component/UserHeaderComponent";
const Header = () => {
	return (
		<div className="header">
			<div className="header__logo-block">
				<Link to="/">
					<h1 className="header__logo-text">Youni</h1>
				</Link>
			</div>
			<MainPageHeaderComponent />
			{/* <UserHeaderComponent /> */}
			{/* <CourseHeaderComponent /> */}
		</div>
	);
};

export default Header;
