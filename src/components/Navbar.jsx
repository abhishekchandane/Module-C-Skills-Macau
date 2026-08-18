import { Link, NavLink } from "react-router-dom";


function Navbar() {

    const getNavLinkClass = ({ isActive }) => {

        return isActive
            ? "nav-link active fw-bold"
            : "nav-link";

    };


    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                >
                    Skills Macau
                </Link>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div
                    className="collapse navbar-collapse"
                    id="mainNavbar"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={getNavLinkClass}
                            >
                                Home
                            </NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink
                                to="/competitions"
                                className={getNavLinkClass}
                            >
                                Competitions
                            </NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink
                                to="/events"
                                className={getNavLinkClass}
                            >
                                Events
                            </NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink
                                to="/timeline"
                                className={getNavLinkClass}
                            >
                                Timeline
                            </NavLink>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;