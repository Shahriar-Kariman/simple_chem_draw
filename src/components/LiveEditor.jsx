import { ArrowDownward } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, TextField, ThemeProvider, createTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Home from './Home';

const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "#292929",
          boxShadow: "none",
          margin: "0px",
          color: "white",
        },
      }
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
        <Accordion >
          <AccordionSummary
            sx = {{ 'background': '#008080' }}
            expandIcon={<ArrowDownward />}
            aria-controls="info-content"
            id="info-header"
          >
            Info
          </AccordionSummary>
          <AccordionDetails >
            <Home />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx = {{ 'background': '#008080' }}
            expandIcon={<ArrowDownward />}
            aria-controls="input-content"
            id="input-header"
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
              sx={{marginTop:'7px'}}
            />
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  )
}

export default LiveEditor