import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import DateTime from "./Date";

export default function FilteredData({ handleUserFilter, selectedUser, user, filtered ,handleDelete,setIsUpdate,handleClickOpen,setCurrentId,handleFields}) {
  
  const handleChange = (event) => {
    handleUserFilter(event);
  };
  

  return (
    <>
      <FormControl fullWidth sx={{width:"200px",marginBottom:"30px",marginTop:'10px'}}>
        <InputLabel id="filter-select-label" sx={{color:'#f97623'}}>Select User</InputLabel>
        <Select
          labelId="filter-select-label"
          id="filter-select"
          value={selectedUser}
          label="Select User"
          onChange={handleChange}
        >
          <MenuItem value="All">All</MenuItem>
          {user.map((each, index) => (
            <MenuItem key={index} value={each}>
              {each}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {filtered.map((entity, index) => (
        <div className="hat-card" key={index}>
          <div className="hat-image">
            <img src={entity.imageUrl} alt={entity.design_name} />
          </div>
          <div className="hat-details">
            <p><strong>Design Name:</strong> {entity.design_name} </p>
            <p><strong>Created By:</strong> {entity.creator}</p>
            <p><strong>Description:</strong> {entity.description}</p>
            <div className="container-spaceBetween">
              <div className="button-container">
                <button className="delete-option" onClick={() => handleDelete(entity._id)}>Delete</button>
                <button className="update-option" onClick={() => { setIsUpdate(true); handleClickOpen(); setCurrentId(entity._id); handleFields(entity) }}>Edit</button>
              </div>
              <DateTime createdAt={entity.created_at} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
