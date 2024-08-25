import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

const HomePage = ({ title }: PageProps) => {
  useTitle(title);

  return <div>HomePage</div>;
};

export default HomePage;
