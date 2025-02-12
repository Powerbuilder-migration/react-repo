import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid2";
import TabPanel from "./tabPanel.tsx";
import Prescripcion from "./prescripcion.tsx";
import PersonIcon from "@mui/icons-material/Person";

const prescripcionData = [
  {
    id: 1,
    tipo: "suero",
    iap: "P",
    tr: null,
    vmed: false,
    vfar: true,
    producto: {
      nombre: "FLUORO EN SUERO",
      descripcion: "FLUOROURACILO VIAL 200 MILIGRAMOS ",
    },
  },
  {
    id: 2,
    tipo: "pastilla",
    iap: "P",
    tr: "+!",
    vmed: true,
    vfar: true,
    producto: {
      nombre: "ASPIRINA",
      descripcion: "Ácido acetilsalicílico 500 mg",
    },
  },
  {
    id: 3,
    tipo: "pastilla",
    iap: "A",
    tr: "+!",
    vmed: true,
    vfar: false,
    producto: {
      nombre: "IBUPROFENO",
      descripcion: "Ibuprofeno 400 mg en tabletas",
    },
  },
  {
    id: 4,
    tipo: "pastilla",
    iap: "I",
    tr: "R",
    vmed: true,
    vfar: false,
    producto: {
      nombre: "PARACETAMOL",
      descripcion: "Paracetamol 500 mg en cápsulas",
    },
  },
];

const Program = () => {
  const [value, setValue] = useState(0);
  const [patient, setPatient] = useState("Paciente 1");
  const [show, setShow] = useState("General");

  const changePatient = (event: SelectChangeEvent) => {
    setPatient(event.target.value as string);
  };

  const changeShow = (event: SelectChangeEvent) => {
    setShow(event.target.value as string);
  };

  const tabs = ["Prescripción", "Disp./Elab.", "Administración"];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ textAlign: "left" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PersonIcon
            sx={{ marginRight: "10px", height: "30px", width: "30px" }}
          />
          <Typography variant="h6">1112 1112, 1112 (1112)</Typography>
        </Box>

        <Grid container spacing={1} sx={{ margin: "20px 0" }}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2">Programa</Typography>
            <Typography variant="button" color="grey">
              Hematología
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2">Unidad</Typography>
            <Typography variant="button" color="grey">
              Hematología laboratorio
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2">Cama</Typography>
            <Typography variant="button" color="grey">
              Cama corta estancia hematología
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2">Puesto</Typography>
            <Typography variant="button" color="grey"></Typography>
          </Grid>
        </Grid>

        <FormControl
          sx={{ m: 1, minWidth: 120, margin: "0 0 20px 0" }}
          size="small"
        >
          <InputLabel id="patient">Paciente</InputLabel>
          <Select
            labelId="patient"
            id="patient-select"
            value={patient}
            label="Patient"
            onChange={changePatient}
          >
            <MenuItem value={"Paciente 1"}>Paciente 1</MenuItem>
            <MenuItem value={"Paciente 2"}>Paciente 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{ m: 1, minWidth: 120, margin: "0 0 20px 20px"  }}
          size="small"
        >
          <InputLabel id="show">Mostrar</InputLabel>
          <Select
            labelId="show"
            id="show-select"
            value={show}
            label="Mostrar"
            onChange={changeShow}
          >
            <MenuItem value={"General"}>General</MenuItem>
            <MenuItem value={"Otra"}>Otra</MenuItem>
          </Select>
        </FormControl>

        <Divider />
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
          {tabs.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((_, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Prescripcion prescripcion={prescripcionData} />
        </TabPanel>
      ))}
    </Box>
  );
};

export default Program;
