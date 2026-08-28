import { useParams } from "react-router-dom";
import { Patient } from "../types";
import { Typography } from "@mui/material";

interface PatientProfileProps {
  patients: Patient[];
};

const PatientProfile = ({ patients }: PatientProfileProps) => {
  const params = useParams();

  const patient = patients.find((patient) => patient.id === params.id);
  console.log(patient);
  if (!patient) {
    return <p>not found</p>;
  }
  return (
    <>
      <Typography variant="h5" component="h1">
        {patient.name}
      </Typography>
      <Typography variant="body1">SSN: {patient.ssn}</Typography>
      <Typography variant="body1">Occupation: {patient.occupation}</Typography>
      <Typography variant="body1">Date of birth: {patient.dateOfBirth}</Typography>
    </>
  );
};

export default PatientProfile;
