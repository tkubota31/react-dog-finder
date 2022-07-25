// import React from "react"
// import{NavLink} from "react-router-dom"

// const NavBar = ({dogs}) =>{
//     return(
//         <nav>
//             <NavLink to="/dogs">Home</NavLink>
//             {dogs.map(dog =>(
//                 <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
//             ))}
//         </nav>
//     );
// }

// export default NavBar;

import React from "react"
import {NavLink} from "react-router-dom"


function NavBar({dogs}) {
  const links = dogs.map(dog => (
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
      {dog.name}
    </NavLink>
  ));
  return (
    <nav>
      <NavLink exact to="/dogs">Home</NavLink>
      {links}
    </nav>
  );
}

export default NavBar;
