import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react'

function LiveEditor({ setMol }) {
  
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)
    
    handleResize()
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={
      {
        height: `${height}px`, 
        overflow: 'hidden',
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
        onChange={
          (e)=>{
            setMol(e.target.value)
          }
        }
      />
    </div>
  )
}

export default LiveEditor