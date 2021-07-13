import coffeeMug from "../../images/coffeeMug.png";

interface Props {
  open: boolean;
  close: () => void;
}

export const Modal: React.FC<Props> = ({ open, close }) => {
  return (
    <div
      style={{ display: open ? "flex" : "none" }}
      className="fixed flex-col justify-center content-center items-center min-w-screen h-full inset-0 z-50 bg-black bg-opacity-60"
    >
      <div className="relative flex flex-col w-full max-w-lg p-5 py-auto mx-auto my-auto rounded-xl shadow-lg bg-white">
        <div className="text-blue-900 text-xl font-semibold text-center mb-2">
          Thank you for reading!
        </div>
        <div className="text-blue-600 text-center text-lg">
          Here is a virtual cup of coffee.
        </div>
        <div className="flex justify-center">
          <img
            className="h-48 w-48 bg-white rounded-full"
            alt="coffeeCup"
            src={coffeeMug}
          />
        </div>
        <button
          className="bg-blue-500 rounded text-white font-semibold hover:bg-blue-300 h-12"
          onClick={close}
        >
          Close
        </button>
      </div>
    </div>
  );
};
