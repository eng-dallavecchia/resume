import profilepicture from "../../images/profilepicture.jpeg";
import email from "../../images/email.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const PersonalCard: React.FC = () => {
  return (
    <div className="bg-blue-200 h-screen pt-44 pb-36">
      <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg justify-center pt-4">
        <div className="flex justify-center md:justify-center mt-4">
          <img
            className="w-32 h-32 object-cover bg-white rounded-full border-4 border-blue-500 -mt-24"
            src={profilepicture}
            alt={"Profile"}
          />
        </div>
        <div className="text-blue-900 font-semibold text-center text-2xl mt-4">
          Gabriel Dalla Vecchia
        </div>
        <div className="text-blue-500 text-center text-justify mx-8 my-4">
          {
            "Hey! Let's keep in touch. Click one the links bellow to check out my social media:"
          }
        </div>
        <div className="flex flex-row justify-center mx-8 pb-4">
          <SocialMedia
            title={"Email"}
            image={email}
            link={"mailto:gabrieldallavecchia@live.com"}
          />

          <SocialMedia
            title={"Github"}
            image={github}
            link={"https://github.com/eng-dallavecchia"}
          />

          <SocialMedia
            title={"LinkedIn"}
            image={linkedin}
            link={"https://www.linkedin.com/in/gabrieldallavecchia/"}
          />
        </div>
      </div>
    </div>
  );
};
