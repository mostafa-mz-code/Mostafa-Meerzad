import {
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavMenuTriggerLink from "./NavMenuTriggerLink";

const ProjectsNav = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <NavMenuTriggerLink href="/projects">Projects</NavMenuTriggerLink>
      </NavigationMenuTrigger>
    </NavigationMenuItem>
  );
};

export default ProjectsNav;
