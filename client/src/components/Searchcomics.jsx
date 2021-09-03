import React from 'react'

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
      <button type="submit"> Search Comics </button>
    </form>
    )
}

export default Search