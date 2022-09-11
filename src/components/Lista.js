import React from 'react'
import './calculator.css';
import { ListItem, ListItemText, List } from '@mui/material';

function Lista({ parentToChild }) {


  

  return (
     
      
      <List>
      {
        Object.values(parentToChild).map((val, index) => 
          <ListItem>
            <ListItemText>Year-{index + 1}: </ListItemText>
            <ListItemText class="itemtext">{val}</ListItemText>
          </ListItem>
          )
        }
        
    </List>
    
  )
}

export default Lista