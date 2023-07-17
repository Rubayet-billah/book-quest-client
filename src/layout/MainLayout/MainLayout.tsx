/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Outlet } from "react-router-dom";
import Header from "../../pages/shared/Header/Header";
import FooterSection from "../../pages/shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { useAppDispatch } from "../../redux/hook";
import {
  IAuth,
  setLoading,
  setUser,
} from "../../redux/features/auth/authSlice";
import { useEffect } from "react";

const MainLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth: IAuth = JSON.parse(localStorage.getItem("auth") as string);
    console.log(auth);
    if (auth) {
      dispatch(setUser(auth));
    }
    dispatch(setLoading(false));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto px-3 md:px-0 min-h-[70vh]">
        <Outlet />
      </section>
      <FooterSection />
      <ToastContainer position="top-center" />
    </div>
  );
};

export default MainLayout;
