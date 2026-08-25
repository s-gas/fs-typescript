import type { NonSensitiveDiaryEntry } from "../../../backend/src/types";

interface TableProps {
  diaries: NonSensitiveDiaryEntry[];
};

const Table = ({ diaries }: TableProps) => {
  return (
    <table className="text-center">
      <thead className="border-b">
        <tr>
          <th className="px-4">Date</th>
          <th className="px-4">Weather</th>
          <th className="px-4">Visibility</th>
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
