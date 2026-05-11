import MobileDrawer from "./MobileDrawer";
import ModeToggle from "./ModeToggle";
import Name from "./Name";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  p-5 px-3 md:px-8 lg:px-12">
      <Name />
      <div className="md:flex gap-3 items-center hidden">
        <Navigation /> <ModeToggle />
      </div>
      <MobileDrawer />
    </nav>
  );
};

export default Navbar;
