import { Navbar } from "flowbite-react";

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
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
