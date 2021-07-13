interface Props {
  title: string;
  link?: string;
  image: string;
}

export const SocialMedia: React.FC<Props> = ({ title, link, image }) => {
  return (
    <div className="flex flex-col justify-start w-full mt-2 mb-2">
      <div className="flex justify-center md:justify-center m-2">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              className="w-16 h-16 object-cover bg-white rounded-xl"
              src={image}
              alt={title}
            />
          </a>
        ) : (
          <img
            className="w-16 h-16 object-cover bg-white rounded-xl"
            src={image}
            alt={title}
          />
        )}
      </div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="my-auto"
        >
          <div className="text-center mx-2 text-blue-300">{title}</div>
        </a>
      ) : (
        <div className="text-center my-auto mx-2 text-blue-300">{title}</div>
      )}
    </div>
  );
};
