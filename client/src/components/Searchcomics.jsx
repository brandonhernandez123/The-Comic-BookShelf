import React from 'react'
import {Button} from 'react-bootstrap'
function Search (props)  {
    return(
        <form  className="input"onSubmit={props.onSubmit}>
      <input
        type="text"
        name="Search"
        value={props.value}
        placeholder="Search Comics"
        onChange={props.onChange}
      />
      <br/>
      <br/>
      <div className="d-grid gap-2">
      <Button variant = 'primary' size='lg' type="submit"> Search Comics</Button> 
      </div>
    </form>
    )
}

export default Search