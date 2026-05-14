// "use client";
import ProjectsList from "@/app/projects/ProductionWork";
import Header from "./Header";
import PersonalProjects from "./PersonalProjects";
import TutorialProjects from "./TutorialProjects";

const ProjectsPage = () => {
  return (
    <section
      className={
        "flex flex-col bg-gradient-to-b from-[rgba(10,10,15,0.6)]/10 to-darkblue "
      }
    >
      <Header />
      <ProjectsList />
      <PersonalProjects />
      <TutorialProjects />
    </section>
  );
};

export default ProjectsPage;
