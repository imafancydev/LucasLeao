import { TProjectsData } from "@/types/ProjectsItemData";

interface ProjectsItemProps {
  projects: TProjectsData;
}

export const ProjectsItem = ({ projects }: ProjectsItemProps) => {
  return (
    <a
      target="_blank"
      data-cursor="block"
      data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1;--cursor-blur-duration: 0.7s;border-radius: 6px"
      href={projects.gitHubLink}
    >
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-bold tracking-tight text-zinc-300">
          {projects.title}
        </h2>
        <p className="text-base text-zinc-500">{projects.techs}</p>
      </div>

      <div className="text-sm leading-7 [&:not(:first-child)]:mt-6">
        {projects.subTitle}
      </div>
    </a>
  );
};

export default ProjectsItem;
