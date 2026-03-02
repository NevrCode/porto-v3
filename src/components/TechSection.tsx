import { getPosts } from "@/utils/utils";
import { AutoScroll, Column, Fade, Heading, Row } from "@once-ui-system/core";
import { ProjectCard, ProjectCardOld, TechCard } from "@/components";
import { tech } from "@/resources/content";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function TechSection({ range, exclude }: ProjectsProps) {
  return (
    <>
      
      <AutoScroll speed="slow">
        
        {tech.map((post, index) => (
          <TechCard
            key={index}
            title={post.name}
            icon={post.icon || "default-tech-icon"}
          />
        ))}
      </AutoScroll>
      
    </>
  );
}
