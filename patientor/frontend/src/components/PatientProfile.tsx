import { Patient } from "../types";

interface PatientProfileProps {
  patients: Patient[];
};

const PatientProfile = ({ patients }: PatientProfileProps) => {
  console.log(patients);
  return (
    <p>hello</p>
  );
};

export default PatientProfile;
