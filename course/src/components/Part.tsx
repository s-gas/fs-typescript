import type { CoursePart } from "../types/course";
import { assertNever } from "../utils/assertNever";

interface PartProps {
  part: CoursePart;
};

const Part = ({ part }: PartProps) => {
  switch (part.kind) {
    case "basic":
      return (
        <div className="flex flex-col">
          <p className="text-xl font-bold">{part.name} {part.exerciseCount}</p>
          <p className="italic">{part.description}</p>
        </div>
      );
    case "group":
      return (
        <div className="flex flex-col">
          <p className="text-xl font-bold">{part.name} {part.exerciseCount}</p>
          <p>project exercises {part.groupProjectCount}</p>
        </div>
      );
    case "background":
      return (
        <div className="flex flex-col">
          <p className="text-xl font-bold">{part.name} {part.exerciseCount}</p>
          <p className="italic">{part.description}</p>
          <p>submit to <a className="underline underline-offset-4"href={part.backgroundMaterial}>{part.backgroundMaterial}</a></p>
        </div>
      );
    case "special":
      return (
        <div className="flex flex-col">
          <p className="text-xl font-bold">{part.name} {part.exerciseCount}</p>
          <p className="italic">{part.description}</p>
          <p>required skills: {part.requirements.map((requirement, i) => {
            if (i === part.requirements.length - 1) {
              return <span key={i}>{requirement}</span>
            } else {
              return <span key={i}>{requirement}, </span>
            }
          })}</p>
        </div>
      )
    default:
      assertNever(part);
      return null;
  }
}

export default Part
