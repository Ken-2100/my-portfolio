import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="m-8">
        <div className="grid grid-cols-3">
          <div className="">
            <Link to="/home">
              <p className="text-6xl font-bold ">
                <span className="text-blue-900">K</span>
                <span className="text-blue-400">A.</span>
              </p>
            </Link>
          </div>
          <div className="col-start-3 flex items-center mr-8">
            <ul className="navbar-nav flex gap-5 text-2l text-stone-950 font-medium">
              <li>
                <Link className="" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
