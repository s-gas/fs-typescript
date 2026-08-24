import type { CoursePart } from "../types/course";
import Part from "./Part";

interface ContentProps {
  parts: CoursePart[],
};

const Content = ({ parts }: ContentProps) => {
  return (
    <div className="flex flex-col gap-2">
      {parts.map((part, id) => (
        <Part key={id} part={part}/>
      ))}
    </div>
  )
};

export default Content;
