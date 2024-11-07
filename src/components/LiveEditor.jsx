import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react'

function LiveEditor({ height, setMol }) {

  return (
    <div style={
      {
        height: `${height}px`,
        display: 'flex',
        justifyContent: 'center',
        padding: '12px'
      }
    }>
      <TextField 
        variant='outlined'
        placeholder='CN1C=NC2=C1C(=O)N(C(=O)N2C)C'
        label='SMILES Notations'
        multiline
        fullWidth
        inputProps={{ style: { color: "red" } }}
        onChange={
          (e)=>{
            setMol(e.target.value)
          }
        }
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "#000",
            fontFamily: "Arial",
            fontWeight: "bold",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2e2e2e",
              borderWidth: "2px",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "secondary.main",
                borderWidth: "3px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "bold",
              "&.Mui-focused": {
                color: "secondary.main",
                fontWeight: "bold",
              },
            },
          },
        }}
      />
    </div>
  )
}

export default LiveEditor