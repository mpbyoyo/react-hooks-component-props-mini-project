import React from "react";

function Header({data: {name} }) {
  return (
    <div id="header">
      <h1 id="title">{name}</h1>
    </div>
  )
}

export default Header