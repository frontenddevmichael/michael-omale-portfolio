import { Link } from "react-scroll";

export default function Nav() {
    return (
        <header>
            <nav className="nav">
                <div className="logo">
                    <h1>Omale Michael</h1>
                </div>

                <div className="navLinks">
                    <Link
                        to="home"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        spy={true}
                        activeClass="active"
                    >
                        Home
                    </Link>

                    <Link
                        to="about"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        spy={true}
                        activeClass="active"
                    >
                        About
                    </Link>

                    <Link
                        to="skills"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        spy={true}
                        activeClass="active"
                    >
                        Skills
                    </Link>

                    <Link
                        to="projects"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        spy={true}
                        activeClass="active"
                    >
                        Projects
                    </Link>

                    <Link
                        to="contact"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        spy={true}
                        activeClass="active"
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}
