import type { NonSensitiveDiaryEntry } from "../../../backend/src/types";

interface TableProps {
  diaries: NonSensitiveDiaryEntry[];
};

const Table = ({ diaries }: TableProps) => {
  return (
    <table className="text-center">
      <thead className="border-b text-xs font-mono">
        <tr>
          <th className="px-4 font-normal">DATE</th>
          <th className="px-4 font-normal">WEATHER</th>
          <th className="px-4 font-normal">VISIBILITY</th>
        </tr>
      </thead>
      {diaries.map((diary) => (
        <tbody key={diary.id}>
          <tr>
            <td>{diary.date}</td>
            <td>{diary.weather}</td>
            <td>{diary.visibility}</td>
          </tr>
        </tbody>
      ))}
    </table>
  )
};

export default Table;
