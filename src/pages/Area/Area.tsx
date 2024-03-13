import { Outlet } from "react-router-dom";
import Header from "../../components/UI/Header/Header";
import Footer from "../../components/UI/Footer/Footer";

export default function Area() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
