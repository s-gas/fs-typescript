import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import patientService from "../services/patients";

const PatientProfile = () => {
  const [name, setName] = useState("");
  const [ssn, setSsn] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getPatient = async () => {
      if (!id) return;
      try {
        const patient = await patientService.get(id);
        console.log(patient);
        setName(patient.name);
        setSsn(patient.ssn);
      } catch (e: unknown) {
        console.log(e);
      }
    };

    getPatient();
  }, [id]);

  return (
    <>
      <Typography>{name}</Typography>
      <Typography>ssn: {ssn}</Typography>
    </>
  );
};

export default PatientProfile;
