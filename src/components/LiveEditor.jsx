import { ArrowDownward } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, TextField, ThemeProvider, createTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Home from './Home';

const theme = createTheme({
  components: {
    palette: {
      mode: 'dark',
    },
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

function LiveEditor({ setMol }) {

  return (
    <div
      style={{
        margin: '9px',
      }}
    >
      <ThemeProvider theme={theme} >
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownward />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Info
          </AccordionSummary>
          <AccordionDetails >
            <Home />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownward />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Input
          </AccordionSummary>
          <AccordionDetails >
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
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  )
}

export default LiveEditor