import { Outlet } from "react-router-dom";
import Header from "../../pages/shared/Header/Header";
import Home from "../../pages/Home/Home";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto px-3 md:px-0">
        <Outlet>
          <Home />
        </Outlet>
      </section>
    </div>
  );
};

export default MainLayout;
