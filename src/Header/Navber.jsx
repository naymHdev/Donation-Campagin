import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img className="lg:w-40 w-20" src="./src/assets/Logo.png" alt="" />
      </div>
      <nav>
        <ul className="flex justify-end py-6 ml-2 gap-2 lg:gap-5 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-teal-500 underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-teal-500 underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-teal-500 underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Navber;
