import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <span className="uppercase self-center whitespace-nowrap text-xl font-bold dark:text-white">
            Book Quest
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/add">Add Book</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/login">Sign In</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/register">Sign Up</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
