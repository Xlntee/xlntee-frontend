import React, { useEffect, useRef, useState } from "react";
import { Avatar, Box, Divider, List, ListItem, ListItemIcon, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";

interface IProps {
	onClose: () => void;
}

const listStyle = {
	fontFamily: "Noto Sans",
	fontSize: "20px",
	fontWeight: 400,
	color: "#000",
};

const profileModal: React.FC<IProps> = ({ onClose }) => {
	const ListRef = useRef<HTMLDivElement | null>(null);
	const [selectedLanguage, setSelectedLanguage] = useState("uk");

	const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedLanguage(event.target.value);
	};

	useEffect(() => {
		const handleOutSideClick = (event: MouseEvent) => {
			if (ListRef.current && !ListRef.current.contains(event.target as Node)) {
				onClose();
			}
		};
		document.addEventListener("mousedown", handleOutSideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutSideClick);
		};
	}, [onClose]);

	return (
		<div
			ref={ListRef}
			style={{
				top: "60px",
				right: "0",
				position: "absolute",
			}}
		>
			<Paper
				sx={{
					minWidth: "320px",
					maxWidth: "350px",
					padding: "10px",
				}}
			>
				<List>
					<ListItem>
						<ListItemIcon>
							<Avatar sx={{ width: "75px", height: "75px" }}>
								<AccountCircleIcon />
							</Avatar>
						</ListItemIcon>
						<Box sx={{ marginLeft: "10px" }}>
							<Typography
								sx={{
									fontFamily: "Noto Sans",
									fontSize: "20px",
									fontWeight: 700,
									textAlign: "left",
									color: "#082AC9",
								}}
							>
								@leshalurn
							</Typography>
							<Typography
								sx={{
									fontFamily: "Noto Sans",
									fontSize: "20px",
									fontWeight: 400,
									textAlign: "left",
									color: "#060606",
								}}
							>
								lesha@gmail.com
							</Typography>
						</Box>
					</ListItem>
					<Divider />
					<List>
						<ListItem>
							<Link to="#" style={{ textDecoration: "none" }}>
								<Typography sx={listStyle}>Список вподобань</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="#" style={{ textDecoration: "none" }}>
								<Typography sx={listStyle}>Моє навчання</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="#" style={{ textDecoration: "none" }}>
								<Typography sx={listStyle}>Панель викладача</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="#" style={{ textDecoration: "none" }}>
								<Typography sx={listStyle}>Повідомлення</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="#" style={{ textDecoration: "none" }}>
								<Typography sx={listStyle}>Гаманець</Typography>
							</Link>
						</ListItem>
					</List>
					<Divider />
					<List>
						<ListItem>
							<Typography sx={listStyle}>Мова</Typography>
							<LanguageIcon sx={{ margin: "0 5px" }} />
							<select
								value={selectedLanguage}
								onChange={handleLanguageChange}
								style={{
									border: "none",
									color: "#777777",
									fontSize: "20px",
									fontWeight: 400,
									cursor: "pointer",
								}}
							>
								<option value="uk">Українська</option>
								<option value="en">Англійська</option>
								<option value="es">Іспанська</option>
								<option value="fr">Французька</option>
								<option value="it">Італійська</option>
								<option value="ru">Російська</option>
							</select>
						</ListItem>
						<ListItem>
							<Link to="#" style={{ textDecoration: "none" }}>
								<Typography sx={listStyle}>Допомога</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="#" style={{ textDecoration: "none" }}>
								<Typography sx={listStyle}>Вийти</Typography>
							</Link>
						</ListItem>
					</List>
				</List>
			</Paper>
		</div>
	);
};

export default profileModal;
