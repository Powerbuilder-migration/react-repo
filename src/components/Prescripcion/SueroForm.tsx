import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    TextField,
    MenuItem,
    Button,
    Box,
    Checkbox,
    FormControlLabel,
    Select,
    InputLabel,
    FormControl,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface FormData {
    tipo: string;
    nombre: string;
    lote: string;
    caducidad: Date | null;
    uso: string;
    existe: boolean;
    via: string;
}

const SueroForm: React.FC = () => {
    const { register, handleSubmit, control } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data); 
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 4 }}>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Tipo</InputLabel>
                    <Select {...register('tipo', { required: true })}>
                        <MenuItem value="mezcla">Mezcla</MenuItem>
                        <MenuItem value="puro">Puro</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label="Nombre"
                    {...register('nombre', { required: true })}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Lote"
                    {...register('lote', { required: true })}
                    fullWidth
                    margin="normal"
                />

                <Controller
                    name="caducidad"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                        <DatePicker                            
                        label="Caducidad"                            
                        {...field}                            
                        onChange={(date) => field.onChange(date)}                            
                        renderInput={(params) => (  
                          <TextField {...params} fullWidth margin="normal" />                            
                        )}                        
                    />
                    )}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Uso</InputLabel>
                    <Select {...register('uso', { required: true })}>
                        <MenuItem value="indicado">Indicado</MenuItem>
                    </Select>
                </FormControl>

                <FormControlLabel
                    control={<Checkbox {...register('existe')} />}
                    label="Existe"
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Vía</InputLabel>
                    <Select {...register('via', { required: true })}>
                        <MenuItem value="intravenosa">Intravenosa</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </LocalizationProvider>
    );
};

export default SueroForm;