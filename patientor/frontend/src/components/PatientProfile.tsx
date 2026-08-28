import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import patientService from "../services/patients";

const PatientProfile = () => {
  const { id } = useParams();

  useEffect(() => {
    const getPatient = async () => {
      if (!id) return;
      try {
        const patient = await patientService.get(id);
        console.log(patient);
      } catch (e: unknown) {
        console.log(e);
      }
    };

    getPatient();
  }, [id]);

  return (
    <>
      <Typography>Hello</Typography>
    </>
  );
};

export default PatientProfile;
