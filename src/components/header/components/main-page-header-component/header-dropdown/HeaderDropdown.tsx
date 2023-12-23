import { useEffect, useRef } from "react";
import "./HeaderDropdown.scss";
import { categoriesColumn1, categoriesColumn2, categoriesColumn3 } from "./tempData";

interface IProps {
	onClose: () => void;
}

const HeaderDropdown: React.FC<IProps> = ({ onClose }) => {
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleOutSideClick = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				onClose();
			}
		};
		document.addEventListener("mousedown", handleOutSideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutSideClick);
		};
	}, [onClose]);

	return (
		<div ref={dropdownRef} className="categories-dropdown">
			<div className="categories-dropdown__column">
				{categoriesColumn1.map((category, index) => (
					<div key={index} className="categories-dropdown__item">
						{category}
					</div>
				))}
			</div>
			<div className="categories-dropdown__vertical-line"></div>
			<div className="categories-dropdown__column">
				{categoriesColumn2.map((category, index) => (
					<div key={index} className="categories-dropdown__item">
						{category}
					</div>
				))}
			</div>
			<div className="categories-dropdown__vertical-line"></div>
			<div className="categories-dropdown__column">
				{categoriesColumn3.map((category, index) => (
					<div key={index} className="categories-dropdown__item">
						{category}
					</div>
				))}
			</div>
		</div>
	);
};

export default HeaderDropdown;
