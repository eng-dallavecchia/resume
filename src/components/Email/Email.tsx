interface Props {
  open: boolean;
  close: () => void;
}

export const Email: React.FC<Props> = ({ open, close }) => {
  return (
    <div
      style={{ display: open ? "flex" : "none" }}
      className="fixed inset-0 w-screen h-screen bg-gray-400 bg-opacity-50 z-50"
    >
      <div className="relative max-w-lg w-full bg-white rounded-lg mx-auto mb-auto mt-64">
        <div className="flex flex-col justify-center text-center text-blue-400 h-full mx-12 gap-4 py-6">
          {"gabrieldallavecchia@live.com"}

          <button
            onClick={close}
            className="bg-blue-500 rounded text-white font-semibold hover:bg-blue-300 h-12"
          >
            OK!
          </button>
        </div>
      </div>
    </div>
  );
};
