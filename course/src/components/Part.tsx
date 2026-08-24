import type { CoursePart } from "../types/course";

interface PartProps {
  part: CoursePart;
};

const Part = ({ part }: PartProps) => {
  switch (part.kind) {
    case "basic":
      return (
        <>
          <p>{part.name} {part.exerciseCount}</p>
          <p>{part.description}</p>
        </>
      );
    case "group":
      return (
        <>
          <p>{part.name} {part.exerciseCount}</p>
          <p>project exercises {part.groupProjectCount}</p>
        </>
      );
    case "background":
      return (
        <>
          <p>{part.name} {part.exerciseCount}</p>
          <p>{part.description}</p>
          <p>submit to {part.backgroundMaterial}</p>
        </>
      );
  }
}

export default Part
