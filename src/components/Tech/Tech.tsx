interface Props {
  title: string;
  text: string;
  image?: string;
}

export const Tech: React.FC<Props> = ({ title, text, image }) => {
  return (
    <div className="max-w-xl py-4 px-8 bg-white shadow-lg rounded-lg my-16 mx-auto">
      <div className="text-blue-800 text-3xl mt-10 md:mt-0 flex justify-center md:justify-start">
        {title}
      </div>
      {image && (
        <div className="flex justify-center md:justify-end -mt-32 md:-mt-20">
          <img
            className="w-20 h-20 object-cover bg-white rounded-full border-4 border-blue-500"
            src={image}
            alt={title}
          />
        </div>
      )}
      <div className="text-blue-500 text-lg mt-16 md:mt-4 text-justify">
        {text}
      </div>
    </div>
  );
};
