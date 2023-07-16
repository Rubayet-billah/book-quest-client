import { Outlet } from "react-router-dom";
import Header from "../../pages/shared/Header/Header";
import Home from "../../pages/Home/Home";
import FooterSection from "../../pages/shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto px-3 md:px-0 min-h-[70vh]">
        <Outlet>
          <Home />
        </Outlet>
      </section>
      <FooterSection />
      <ToastContainer position="top-center" />
    </div>
  );
};

export default MainLayout;
