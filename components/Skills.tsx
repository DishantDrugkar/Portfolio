"use client";
import { IconCloud } from "@/components/ui/IconCloud";

const slugs = [
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "postgresql",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "springboot",
  "hibernate"

];

function Skills() {
  return (
    <div className="my-10 py-10">
      <h1 className="heading">
        Skills &amp;{" "}
        <span className="text-purple">Technologies</span>
      </h1>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default Skills;
