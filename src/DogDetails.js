// import React from "react"
// import {Link, Navigate} from "react-router-dom"
// import {useParams} from "react-router-dom"

// const DogDetails = ({dogs}) =>{
//     const{name} = useParams()

//     if (name){
//         const currentDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase())
//         if(!currentDog.name){
//             return <Navigate to="/dogs" />
//         }

//         return(
//             <div>
//                 <h1>{currentDog.name}</h1>
//                 <img src={currentDog.src} alt={currentDog.name} />
//                 <h3>{currentDog.age}</h3>
//                 <ul>
//                     {currentDog.facts.map((fact, i) =>(
//                         <li key={i}>{fact}</li>
//                     ))}
//                 </ul>
//                 <Link to="/dogs">Home</Link>
//             </div>
//         )
//     }
// }

// export default DogDetails


import React from "react";
import {Route, Link} from "react-router-dom";
import DogList from "./DogList"


function DogDetails({dog}) {

  if (!dog) return <Route path = "/dogs" element = {<DogList />} />

  return (
    <div className="row DogDetails">
      <div className="col d-flex flex-column align-items-center">
        <img src={dog.src} alt={dog.name} />
        <h2>{dog.name}</h2>
        <h3>{dog.age} years old</h3>
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Go Back</Link>
      </div>
    </div>
  );
}

export default DogDetails;
