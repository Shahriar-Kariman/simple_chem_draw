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