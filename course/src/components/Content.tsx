interface Part {
  name: string,
  exerciseCount: number,
};

interface ContentProps {
  parts: Part[],
};

const Content = ({ parts }: ContentProps) => {
  return (
    <>
      {parts.map((part, id) => (
        <p key={id}>{part.name} {part.exerciseCount}</p>
      ))}
    </>
  )
};

export default Content;
