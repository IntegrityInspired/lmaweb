import { MainNavbar } from "./MainNavbar";

const Layout = ({ children, mainNav }) => {
  return (
    <div>
      <title> Livestock Marketing Association </title>
      <MainNavbar mainNav={mainNav} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
