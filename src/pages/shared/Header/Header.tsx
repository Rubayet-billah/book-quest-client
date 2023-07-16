import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { removeUser } from "../../../redux/features/auth/authSlice";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
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
          <Link to="/">Home</Link>

          <Link to="/add">Add Book</Link>
          {user?.email ? (
            <Button
              size="xs"
              color="purple"
              onClick={() => dispatch(removeUser())}
            >
              Sign Out
            </Button>
          ) : (
            <>
              <Link to="/login">Sign In</Link>

              <Link to="/register">Sign Up</Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
