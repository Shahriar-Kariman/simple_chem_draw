import { ArrowDownward } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Button, Stack, TextField, ThemeProvider, createTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Info from './Info';
import CompoundLibrary from './CompoundLibrary';

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

  const download = (is_svg)=>{
    console.log("pressed")
    const svgs = [...document.querySelectorAll("svg")]
    const img_processer = (svg)=>{
      const svgData = new XMLSerializer().serializeToString(svg)
      const blob = new Blob(
        [ svgData ],
        { type: "image/svg+xml;charset=utf-8" }
      )
      const url = URL.createObjectURL(blob)
      if (is_svg){
        const link = document.createElement('a')
        link.href = url
        link.download = "chemical_compound.svg" // now later when I have multiple compounds i need to adjust this
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      }
      else {
        const canvas = document.createElement("canvas")
        // I opened the svg and this was its dimensions
        canvas.width = 350
        canvas.height = 300
        const canv_context = canvas.getContext("2d")
        const img = new Image()
        img.onload = () =>{
          canv_context.drawImage(img, 0, 0, 350, 300)
          URL.revokeObjectURL(url)
          const pngData_url = canvas.toDataURL("image/png")
          const link = document.createElement("a")
          link.href = pngData_url
          link.download = "chemical_compound.png"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
        img.src = url
      }
    }
    img_processer(svgs[svgs.length-1]) // the last image in the page is the compound
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
            <Info />
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
                onClick={
                  ()=>{
                    download(false)
                  }
                }
              >
                PNG
              </Button>
              <Button
                variant='outlined'
                fullWidth
                onClick={
                  ()=>{
                    download(true)
                  }
                }
              >
                SVG
              </Button>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx = {{ 'background': '#008080' }}
            expandIcon={<ArrowDownward />}
            aria-controls="input-content"
            id="input-header"
          >
            Common Compounds
          </AccordionSummary>
          <AccordionDetails sx={{ 'padding':'0px' }} >
            <CompoundLibrary />
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  )
}

export default LiveEditor