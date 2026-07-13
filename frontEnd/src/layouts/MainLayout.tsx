import { Outlet } from "react-router-dom";
import Header from "../components/header";
import FooterComponent from "../components/footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
}
