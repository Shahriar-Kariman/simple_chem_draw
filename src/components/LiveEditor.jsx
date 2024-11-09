import { ArrowDownward } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Button, Stack, TextField, ThemeProvider, createTheme } from '@mui/material'
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

function LiveEditor({ setMol, getMol }) {

  const downloadSVGs = ()=>{
    console.log("pressed")
    const svgs = [...document.querySelectorAll("svg")].slice(3)
    svgs.forEach(
      (svg, index)=>{
        const svgData = new XMLSerializer().serializeToString(svg)
        const blob = new Blob(
          [ svgData ],
          { type: "image/svg+xml;charset=utf-8" }
        )
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = "chemical_compound.svg" // now later when I have multiple compounds i need to adjust this
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      }
    )
  }

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
        <Accordion>
          <AccordionSummary
            sx = {{ 'background': '#008080' }}
            expandIcon={<ArrowDownward />}
            aria-controls="input-content"
            id="input-header"
          >
            Download
          </AccordionSummary>
          <AccordionDetails >
            <Stack 
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "space-evenly",
                alignItems: "center"
              }}
            >
              <Button
                variant='outlined'
                fullWidth
                >
                PNG
              </Button>
              <Button
                variant='outlined'
                fullWidth
                onClick={downloadSVGs}
              >
                SVG
              </Button>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  )
}

export default LiveEditor