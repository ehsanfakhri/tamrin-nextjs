import Navigation from "./Navigation";

const Layout = ({ children }) => (
  <div className="p-5">
    <Navigation />
    {children}
  </div>
);

export default Layout;
