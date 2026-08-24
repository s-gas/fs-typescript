import type { CoursePart } from "../types/course";
import Part from "./Part";

interface ContentProps {
  parts: CoursePart[],
};

const Content = ({ parts }: ContentProps) => {
  return (
    <>
      {parts.map((part, id) => (
        <Part key={id} part={part}/>
      ))}
    </>
  )
};

export default Content;
