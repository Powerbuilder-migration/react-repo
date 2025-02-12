// src/components/Formulario.tsx

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    TextField,
    Button,
    Box,
    Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface FormData {
    inicio: Date | null;
    dias: number;
    fin: Date | null;
    proximaAdmision: Date | null;
}

const DuracionForm: React.FC = () => {
    const { handleSubmit, control } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data); // Aquí puedes manejar el envío de datos
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
           <Typography variant="h6" component="h2" sx={{ mb: 2, textTransform: 'uppercase' }}>DURACIÓN</Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Controller
                            name="inicio"
                            control={control}
                            defaultValue={null}
                            render={({ field }) => (
                                <DatePicker
                                    label="Inicio"
                                    {...field}
                                    onChange={(date) => field.onChange(date)}
                                    renderInput={(params) => (
                                        <TextField {...params} fullWidth margin="normal" />
                                    )}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Días"
                            type="number"
                            {...control.register('dias', { required: true })}
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Controller
                            name="fin"
                            control={control}
                            defaultValue={null}
                            render={({ field }) => (
                                <DatePicker
                                    label="Fin"
                                    {...field}
                                    onChange={(date) => field.onChange(date)}
                                    renderInput={(params) => (
                                        <TextField {...params} fullWidth margin="normal" />
                                    )}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Controller
                            name="proximaAdmision"
                            control={control}
                            defaultValue={null}
                            render={({ field }) => (
                                <DatePicker
                                    label="Próxima Admisión"
                                    {...field}
                                    onChange={(date) => field.onChange(date)}
                                    renderInput={(params) => (
                                        <TextField {...params} fullWidth margin="normal" />
                                    )}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
            </Box>
        </LocalizationProvider>
    );
};

export default DuracionForm;