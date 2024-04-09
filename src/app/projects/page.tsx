import MainSection from "@/components/mainSection";
import { sideProjects } from "@/constants/projects";
import ProjectsItem from "./_components/projects-item";

const SideProjects = () => {
  return (
    <MainSection className="text-2xl">
      <div className="flex flex-col gap-8">
        {sideProjects.map((project) => (
          <ProjectsItem key={project.id} projects={project} />
        ))}
      </div>
    </MainSection>
  );
};

export default SideProjects;
