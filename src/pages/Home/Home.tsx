import { NavBar } from "../../components/NavBar/NavBar";
import { Content } from "../../components/Content/Content";
import { Resume } from "../../components/Resume/Resume";

export const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Content Children={Resume} />
    </>
  );
};
