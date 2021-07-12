import { Title } from "../Title/Title";
import { Tech } from "../Tech/Tech";
import {
  reactText,
  finalWords,
  angularText,
  mysqlText,
  mongoDBText,
  sequelizeText,
  jestText,
  introText,
} from "../../data/data";
import react from "../../images/react.png";
import angular from "../../images/angular.png";
import mysql from "../../images/mysql.png";
import mongodb from "../../images/mongodb.png";
import sequelize from "../../images/sequelize.png";
import jest from "../../images/jest.png";
import grains from "../../images/grains.png";
import { Modal } from "../Modal/Modal";

export const Resume: React.FC = () => {
  return (
    <>
      <Title />
      <Tech title={"Introduction"} text={introText} />
      <Tech title={"React"} text={reactText} image={react} />
      <Tech title={"Angular"} text={angularText} image={angular} />
      <Tech title={"MySQL"} text={mysqlText} image={mysql} />
      <Tech title={"MongoDB"} text={mongoDBText} image={mongodb} />
      <Tech title={"Sequelize"} text={sequelizeText} image={sequelize} />
      <Tech title={"Jest"} text={jestText} image={jest} />
      <Tech title={"Final words"} text={finalWords} image={grains} />
    </>
  );
};
