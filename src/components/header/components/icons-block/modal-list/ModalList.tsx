import React, { useEffect, useRef } from "react";
import { Button, List, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IProps {
	children: React.ReactNode;
	title: string;
	onClose: () => void;
}

const ModalList: React.FC<IProps> = ({ children, title, onClose }) => {
	const ListRef = useRef<HTMLDivElement | null>(null);

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
				right: 0,
				position: "absolute",
			}}
		>
			<Paper
				sx={{
					minWidth: "320px",
					maxWidth: "350px",
					maxHeight: "670px",
					padding: "10px",
				}}
			>
				<Typography
					sx={{
						fontSize: "20px",
						fontWeight: 700,
						color: "#000",
					}}
				>
					{title}
				</Typography>
				<List
					sx={{
						maxHeight: "400px",
						overflowY: "auto",
						"&::-webkit-scrollbar": {
							width: "4px",
						},
						"&::-webkit-scrollbar-thumb": {
							backgroundColor: "#D9D9D9",
							borderRadius: "5px",
						},
					}}
				>
					{children}
				</List>
				<Button
					variant="text"
					fullWidth
					sx={{
						textTransform: "none",
					}}
				>
					<Link
						style={{
							color: "#082AC9",
							fontSize: "20px",
							fontWeight: 700,
							textDecoration: "none",
						}}
						to="#"
					>
						Переглянути все
					</Link>
				</Button>
			</Paper>
		</div>
	);
};

export default ModalList;
