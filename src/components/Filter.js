import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
import { Rating } from "@mui/material";
function Filter({setSearch,setRating,rating}) {


    return (
        <div className="SearchBar">
            <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"> <i class="fas fa-search"></i>  </InputGroup.Text>
    <FormControl
      placeholder="Search a Film"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={ (e)=> setSearch ((e.target.value))}
    />
  </InputGroup>


<Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
 
        </div>
    )
}

export default Filter ;
