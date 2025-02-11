import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import TabPanel from "./tabPanel.tsx";
import Prescripcion from "./prescripcion.tsx";

const prescripcionData = [
  {
    id: 1,
    tipo: "suero",
    iap: "P",
    tr: null,
    vmed: null,
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
  const tabs = ["Prescripción", "Disp./Elab.", "Administración"];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
          {tabs.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((label, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Prescripcion prescripcion={prescripcionData} />
        </TabPanel>
      ))}
    </Box>
  );
};

export default Program;
