import { TextField, ThemeProvider, createTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // Outlined
          "& .MuiOutlinedInput-root": {
            color: "#000",
            fontFamily: "Arial",
            fontWeight: "bold",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6495ED",
              borderWidth: "2px",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#008080",
                borderWidth: "3px",
              },
            },
            "&:hover:not(.Mui-focused)": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#008080",
              },
            },
          },
          "& .MuiInputLabel-outlined": {
            color: "#FFAA33",
            fontWeight: "bold",
            "&.Mui-focused": {
              color: "#008080",
            },
          },
        },
      },
    },
  },
});

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
      <ThemeProvider theme={theme} >
        <TextField 
          variant='outlined'
          placeholder='CN1C=NC2=C1C(=O)N(C(=O)N2C)C'
          label='SMILES Notations'
          multiline
          fullWidth
          inputProps={{ 
            style: { color: "#FFAA33" },
          }}
          onChange={
            (e)=>{
              setMol(e.target.value)
            }
          }
        />
      </ThemeProvider>
    </div>
  )
}

export default LiveEditor