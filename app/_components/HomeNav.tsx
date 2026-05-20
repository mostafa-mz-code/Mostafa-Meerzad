import {
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavMenuTriggerLink from "./NavMenuTriggerLink";

const HomeNav = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <NavMenuTriggerLink href="/">Home</NavMenuTriggerLink>
      </NavigationMenuTrigger>
    </NavigationMenuItem>
  );
};

export default HomeNav;
