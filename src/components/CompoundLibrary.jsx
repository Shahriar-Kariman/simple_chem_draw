import React from 'react'
import compounds_library from '../../utils/compounds_library.json'
import { Divider, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import { ContentCopyTwoTone } from '@mui/icons-material';

function CompoundLibrary() {
  return (
    <div style={{margin:0, padding:0}}>
      <List>
        {
          compounds_library.compounds.map(
            (compound, index)=>{
              return <div key={`compound_${index}`}>
                {index>0?<Divider component="li" />:<></>}
                <ListItem>
                  <ListItemText >
                    <Typography noWrap minWidth={'120px'} >
                      {compound.chemName}
                    </Typography>
                  </ListItemText>
                  <ListItemText sx={{margin:'0px 20px'}} >
                    <Typography noWrap>
                      {compound.smilesNote}
                    </Typography>
                  </ListItemText>
                  <IconButton
                    aria-label='copy'
                    onClick={
                      ()=>{
                        navigator.clipboard.writeText(compound.smilesNote)
                        // .then(() => {
                        //   alert("Text copied to clipboard!")
                        // })
                        // .catch(err => {
                        //   console.error("Failed to copy text: ", err)
                        // })
                      }
                    }
                  >
                    <ContentCopyTwoTone style={{color:'white'}} />
                  </IconButton>
                </ListItem>
              </div>
            }
          )
        }
      </List>
    </div>
  )
}

export default CompoundLibrary