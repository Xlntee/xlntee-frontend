import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	FormControlLabelProps,
	Modal,
	Radio,
	RadioGroup,
	TextField,
	Typography,
	useRadioGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const modalStyle = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "665px",
	height: "800px",
	bgcolor: "background.paper",
	borderRadius: "5px",
	boxShadow: 24,
	p: "0 80px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	fontFamily: "Inter",
};

interface IProps {
	isOpenModal: boolean;
	handleCloseModal: () => void;
}

interface StyledFormControlLabelProps extends FormControlLabelProps {
	checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => <FormControlLabel {...props} />)(
	({ checked }) => ({
		".MuiTypography-root": {
			color: checked ? "#32449C" : "#000",
		},
		".MuiSvgIcon-root": {
			color: checked ? "#32449C" : "inherit",
		},
	}),
);

function MyFormControlLabel(props: FormControlLabelProps) {
	const radioGroup = useRadioGroup();

	let checked = false;

	if (radioGroup) {
		checked = radioGroup.value === props.value;
	}

	return <StyledFormControlLabel checked={checked} {...props} />;
}

const ApealModal: React.FC<IProps> = ({ isOpenModal, handleCloseModal }) => {
	return (
		<Modal open={isOpenModal} onClose={handleCloseModal}>
			<Box sx={modalStyle}>
				<Typography
					sx={{
						fontFamily: "Inter, sans-serif",
						fontSize: "30px",
						fontWeight: 700,
						p: "40px 0 30px 0",
					}}
				>
					Поскаржитись
				</Typography>
				<FormControl>
					<RadioGroup name="use-radio-group" defaultValue="1">
						<MyFormControlLabel
							value="1"
							control={
								<Radio
									sx={{
										"& .MuiSvgIcon-root": {
											fontSize: 32,
										},
									}}
								/>
							}
							label={
								<Typography
									sx={{
										fontFamily: "Inter, sans-serif",
										fontSize: "25px",
										fontWeight: 400,
										mb: "22px,",
									}}
								>
									Матеріали лекцій містять не задовільний контент
								</Typography>
							}
							sx={{ pb: "20px" }}
						/>
						<MyFormControlLabel
							value="2"
							control={
								<Radio
									sx={{
										"& .MuiSvgIcon-root": {
											fontSize: 32,
										},
									}}
								/>
							}
							label={
								<Typography
									sx={{
										fontFamily: "Inter, sans-serif",
										fontSize: "25px",
										fontWeight: 400,
									}}
								>
									Матеріали леацій не відповідають темі курсу
								</Typography>
							}
							sx={{ pb: "20px" }}
						/>
						<MyFormControlLabel
							value="3"
							control={
								<Radio
									sx={{
										"& .MuiSvgIcon-root": {
											fontSize: 32,
										},
									}}
								/>
							}
							label={
								<Typography
									sx={{
										fontFamily: "Inter, sans-serif",
										fontSize: "25px",
										fontWeight: 400,
									}}
								>
									Лектор не відповідає професійному рівню курсу
								</Typography>
							}
							sx={{ pb: "20px" }}
						/>
						<MyFormControlLabel
							value="4"
							control={
								<Radio
									sx={{
										"& .MuiSvgIcon-root": {
											fontSize: 32,
										},
									}}
								/>
							}
							label={
								<Typography
									sx={{
										fontFamily: "Inter, sans-serif",
										fontSize: "25px",
										fontWeight: 400,
									}}
								>
									Лектор не обладає компетенціями для викладання в заданій темі
								</Typography>
							}
							sx={{ pb: "20px" }}
						/>
						<MyFormControlLabel
							value="5"
							control={
								<Radio
									sx={{
										"& .MuiSvgIcon-root": {
											fontSize: 32,
										},
									}}
								/>
							}
							label={
								<Typography
									sx={{
										fontFamily: "Inter, sans-serif",
										fontSize: "25px",
										fontWeight: 400,
									}}
								>
									Завищена ціна курсу
								</Typography>
							}
							sx={{ pb: "20px" }}
						/>
					</RadioGroup>
				</FormControl>
				<TextField
					multiline
					rows={4}
					placeholder="Опишіть будь ласка, що вас не задовольнило."
					sx={{
						fontFamily: "Inter, sans-serif",
						width: "100%",
						mb: "30px",
						color: "#828282",
					}}
				/>
				<Button
					variant="contained"
					sx={{
						fontFamily: "Noto Sans",
						fontSize: "25px",
						fontWeight: 700,
						color: "#fff",
						bgcolor: "#32449C",
						textTransform: "none",
					}}
				>
					Подати скаргу
				</Button>
			</Box>
		</Modal>
	);
};

export default ApealModal;
