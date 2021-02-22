import React from "react";


function NavBar( ) {
  const links = ["home", "about", "projects"];
  const anchors = links.map( link => <a key={link} href={"#"+link} > {link} </a> )
  console.log(anchors)
  
  return (
    <nav> 
      {anchors}
    </nav>
  )
}

export default NavBar;
