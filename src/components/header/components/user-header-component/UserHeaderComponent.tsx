import "./UserHeaderComponent.scss";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import IconsBlock from "../icons-block/IconsBlock";
import { Link } from "react-router-dom";
const UserHeaderComponent = () => {
	return (
		<div className="user-header">
			<Link className="user-header__panel-name" to="#">
				<h2>Панель викладача</h2>
			</Link>
			<div className="user-header__nav-block">
				<Link to="#">
					<RemoveRedEyeOutlinedIcon sx={{ marginRight: "5px" }} />
					<span>Лендінг курсу</span>
				</Link>
				<Link to="#">
					<SentimentSatisfiedOutlinedIcon sx={{ marginRight: "5px" }} />
					<span>Переглянути як студент</span>
				</Link>
			</div>
			<Link className="user-header__student-btn" to="#">
				<h2>Студент</h2>
			</Link>
			<IconsBlock />
		</div>
	);
};

export default UserHeaderComponent;
