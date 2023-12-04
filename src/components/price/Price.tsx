import { FC } from "react";
import "./Price.scss";
import css from "classnames";

interface IProps {
	startPrice?: number;
	discountPrice?: number;
	persentage?: number;
	isFree?: boolean;
	size?: "small" | "large";
}

const Price: FC<IProps> = ({
	startPrice = 999,
	discountPrice = 999,
	persentage = 25,
	isFree = true,
	size = "small",
}) => {
	return (
		<div className={css("price", { ["price--large"]: size === "large" })}>
			{isFree ? (
				<span className="price__free">Безкоштовно</span>
			) : (
				<div className="price__block">
					<span className="price__start">{`₴${startPrice}`}</span>
					<span className="price__discount">{`₴${discountPrice}`}</span>
					<span className="price__persentage">{`-${persentage}%`}</span>
				</div>
			)}
		</div>
	);
};

export default Price;
