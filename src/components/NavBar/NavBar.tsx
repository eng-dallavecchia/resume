import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <nav className="fixed inset-x-0 w-screen h-24 flex justify-between flex-wrap bg-blue-500 p-6">
      <div className="w-full flex justify-center flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-md">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-16 ml-16"
          >
            HOME
          </Link>
        </div>
        <Link
          to="/contact"
          className="block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-16 ml-16"
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};
