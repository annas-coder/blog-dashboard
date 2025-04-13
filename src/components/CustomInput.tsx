import { TextField } from '@mui/material';
import React from 'react';

interface InputFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  multiline?:boolean;
  rows ? : number
  errorMessage ? : string | boolean
}

export default function CustomInput({ name, label, value, onChange, error , multiline , rows , errorMessage }: InputFieldProps) {
  return (
    <>   
      <TextField
        fullWidth
        id={name}
        name={name}
        margin="normal"
        label={label}
        value={value}
        onChange={onChange}
        error={error}
        variant="outlined"
        multiline = {multiline}
        rows = {rows}
      />
      {
        errorMessage && <span className='error-msg'>{errorMessage}</span>
      }
    </>
  );
}
