import "./NotificationListItem.scss";

interface IProps {
	date: string;
	author: string;
	text: string;
}

const NotificationListItem: React.FC<IProps> = ({ date, author, text }) => {
	return (
		<div className="notif-list-item">
			<span className="notif-list-item__date">{date}</span>
			<span className="notif-list-item__action-type">
				<span className="notif-list-item__author">{`@${author}`}</span> прокоментував ваш курс:
			</span>
			<span className="notif-list-item__text">{text}</span>
		</div>
	);
};

export default NotificationListItem;
