import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
	return (
		<FormControl
			fullWidth
			variant="outlined"
			sx={{
				backgroundColor: "#fff",
				borderRadius: "5px",
			}}
		>
			<OutlinedInput
				placeholder="Пошук..."
				startAdornment={
					<InputAdornment position="start">
						<SearchIcon sx={{ color: "#777" }} />
					</InputAdornment>
				}
			/>
		</FormControl>
	);
};

export default SearchInput;
