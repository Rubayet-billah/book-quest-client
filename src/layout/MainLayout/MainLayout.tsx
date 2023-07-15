import { Outlet } from "react-router-dom";
import Header from "../../pages/shared/Header/Header";
import Home from "../../pages/Home/Home";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet>
        <Home />
      </Outlet>
    </div>
  );
};

export default MainLayout;
