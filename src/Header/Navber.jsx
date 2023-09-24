import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <div>
        <img src=".././logo.png" alt="" />
      </div>
      <nav className="">
        <ul className="flex justify-end py-6 shadow-md gap-5">
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
              to="donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-teal-500 underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="statistics"
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
