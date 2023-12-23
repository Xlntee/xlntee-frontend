import "./Filter.scss";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchInput from "./search-input/SearchInput";
import FilterListIcon from "@mui/icons-material/FilterList";
import PriceFilterMenu from "./price-filter-menu/PriceFilterMenu";
import FilterInputMenu from "./filter-input-menu/FilterInputMenu";
import { categoriesData, durationData, languageData, levelData } from "./filterSelectData";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

const Filter = () => {
	const [fromPrice, setFromPrice] = useState("");
	const [toPrice, setToPrice] = useState("");
	const [isFree, setIsFree] = useState(false);
	const [level, setLevel] = useState("");
	const [duration, setDuration] = useState("");
	const [lang, setLang] = useState("");
	const [category, setCategory] = useState("");
	const [subCategory, setSubCategory] = useState("");

	const handleClearFilters = () => {
		setFromPrice("");
		setToPrice("");
		setIsFree(false);
		setLevel("");
		setDuration("");
		setLang("");
		setCategory("");
		setSubCategory("");
	};

	const handleSetFromPrice = (e: React.ChangeEvent<HTMLInputElement>) => setFromPrice(e.target.value);

	const handleSetToPrice = (e: React.ChangeEvent<HTMLInputElement>) => setToPrice(e.target.value);

	const handleSetIsFree = (e: React.ChangeEvent<HTMLInputElement>) => setIsFree(e.target.checked);

	const handleLevelChange = (event: SelectChangeEvent) => {
		setLevel(event.target.value as string);
	};

	const handleDurationChange = (event: SelectChangeEvent) => {
		setDuration(event.target.value as string);
	};

	const handleLangChange = (event: SelectChangeEvent) => {
		setLang(event.target.value as string);
	};

	const handleCategoryChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value as string);
	};

	const handleSubCategoryChange = (event: SelectChangeEvent) => {
		setSubCategory(event.target.value as string);
	};

	return (
		<div className="filter">
			<div className="filter__title-block">
				<h2 className="filter__title">Фільтр</h2>
				<FilterAltOutlinedIcon sx={{ color: "#fff", fontSize: "40px" }} />
			</div>
			<div className="filter__search-block">
				<button className="filter__apply-btn">Застосувати</button>
				<button onClick={handleClearFilters} className="filter__clear-btn">
					Очистити фільтр
				</button>
				<SearchInput />
			</div>
			<div className="filter__categories-block">
				<div className="filter__sorting-btn">
					<FilterListIcon sx={{ color: "#fff", fontSize: "20px" }} />
					<span>Найновіші</span>
				</div>
				<PriceFilterMenu
					isFree={isFree}
					handleSetIsFree={handleSetIsFree}
					fromPrice={fromPrice}
					toPrice={toPrice}
					handleSetFromPrice={handleSetFromPrice}
					handleSetToPrice={handleSetToPrice}
				/>
				<FilterInputMenu
					name={"Рівень"}
					options={levelData}
					currentOption={level}
					setCurrentOption={handleLevelChange}
				/>
				<FilterInputMenu
					name={"Тривалість"}
					options={durationData}
					currentOption={duration}
					setCurrentOption={handleDurationChange}
				/>
				<FilterInputMenu
					name={"Мова"}
					options={languageData}
					currentOption={lang}
					setCurrentOption={handleLangChange}
				/>
				<FilterInputMenu
					name={"Категорія"}
					options={categoriesData}
					currentOption={category}
					setCurrentOption={handleCategoryChange}
				/>
				<FilterInputMenu
					name={"Суб-категорія"}
					options={[]}
					currentOption={subCategory}
					setCurrentOption={handleSubCategoryChange}
				/>
			</div>
		</div>
	);
};

export default Filter;
