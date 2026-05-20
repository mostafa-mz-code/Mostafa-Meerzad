import {
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import NavMenuTriggerLink from "./NavMenuTriggerLink";

const AboutNav = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <NavMenuTriggerLink href="/about">About</NavMenuTriggerLink>
      </NavigationMenuTrigger>
    </NavigationMenuItem>
  );
};

export default AboutNav;
