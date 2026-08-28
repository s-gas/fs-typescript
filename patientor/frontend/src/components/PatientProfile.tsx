import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import patientService from "../services/patients";
import { Gender } from "../types";

const PatientProfile = () => {
  const [name, setName] = useState("");
  const [ssn, setSsn] = useState("");
  const [occupation, setOccupation] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState<Gender | "">("");

  const { id } = useParams();

  useEffect(() => {
    const getPatient = async () => {
      if (!id) return;
      try {
        const patient = await patientService.get(id);
        setName(patient.name);
        setSsn(patient.ssn);
        setOccupation(patient.occupation);
        setDate(patient.dateOfBirth);
        setGender(patient.gender);
      } catch (e: unknown) {
        console.log(e);
      }
    };

    getPatient();
  }, [id]);

  return (
    <>
      <Typography variant="h5" component="h2">{name}</Typography>
      <Typography>ssn: {ssn}</Typography>
      <Typography>occupation: {occupation}</Typography>
      <Typography>date of birth: {date}</Typography>
      <Typography>gender: {gender}</Typography>
    </>
  );
};

export default PatientProfile;
