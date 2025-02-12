import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ScienceIcon from "@mui/icons-material/Science";
import MedicationIcon from "@mui/icons-material/Medication";

interface PrescripcionData {
  id: number,
  tipo: string | null,
  iap: string | null,
  tr: string | null,
  vmed: boolean,
  vfar: boolean,
  producto: {
    nombre: string,
    descripcion: string,
  },
};

type PrescripcionProp = {
  prescripcion: PrescripcionData[];
}

const Prescripcion = ({ prescripcion }: PrescripcionProp) => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    nombre: string;
    descripcion: string;
  } | null>(null);

  const handleOpen = (producto: { nombre: string; descripcion: string }) => {
    setSelectedProduct(producto);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const columns: GridColDef[] = [
    {
      field: "tipo",
      headerName: "",
      width: 60,
      align: "center",
      renderCell: (params) => {
        const isSuero = params.value === "suero";
        const Icon = isSuero ? ScienceIcon : MedicationIcon;
        const color = isSuero ? "primary" : "secondary";
        return (
          <Icon
            color={color}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          />
        );
      },
    },
    {
      field: "iap",
      headerName: "I | A | P",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "tr",
      headerName: "T | +! | R",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "vmed",
      headerName: "V. Med",
      width: 100,
      headerAlign: "center",
      align: "center",
      type: "boolean",
    },
    {
      field: "vfar",
      headerName: "V. Far",
      width: 100,
      headerAlign: "center",
      align: "center",
      type: "boolean",
    },
    {
      field: "producto",
      headerName: "Producto",
      width: 500,
      renderCell: (params) => (
        <div
          onClick={() => handleOpen(params.row.producto)}
          style={{ cursor: "pointer", overflowX: "scroll", width: "500px" }}
        >
          <strong>{params.row.producto.nombre}</strong>
          <span style={{ fontSize: "12px", color: "gray", marginLeft: "20px" }}>
            {params.row.producto.descripcion}
          </span>
        </div>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={prescripcion}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 6 } } }}
        pageSizeOptions={[6]}
        disableRowSelectionOnClick
        disableColumnSorting
        disableColumnFilter
      />
      {/* Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedProduct?.nombre}</DialogTitle>
        <DialogContent>
          <p>{selectedProduct?.descripcion}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Prescripcion;
