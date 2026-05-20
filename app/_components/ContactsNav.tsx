import {
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavMenuTriggerLink from "./NavMenuTriggerLink";

const ContactsNav = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <NavMenuTriggerLink href="/contact">Contact</NavMenuTriggerLink>
      </NavigationMenuTrigger>
    </NavigationMenuItem>
  );
};

export default ContactsNav;
