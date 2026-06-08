import {NavbarMenu} from './modules/Navbar/NavbarMenu';
import {Footer} from './modules/Footer/Footer';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
     
      <NavbarMenu />

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;