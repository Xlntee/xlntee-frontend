import "./CoursesGrid.scss";

interface IProps {
  children: React.ReactNode;
}

const CoursesGrid: React.FC<IProps> = ({ children }) => {
  return <div className="courses-grid">{children}</div>;
};

export default CoursesGrid;
