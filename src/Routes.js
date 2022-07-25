// import React from "react"
// import {Route, Routes} from "react-router-dom"
// import DogDetails from "./DogDetails"
// import DogList from "./DogList"

// const UrlRoutes = ({dogs}) =>{
//     return(
//     <div>
//             <Routes>
//                 <Route exact path="/dogs" element={<DogList />} />
//                 <Route exact path="/dogs/:name" element={<DogDetails />} />
//                 <Route path = "/dogs" element = {<DogList />} />

//             </Routes>
//         </div>
//     )
// }

// export default UrlRoutes

import React from 'react';
import {
  Routes,
  Route,

} from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function UrlRoutes({dogs}) {
  return (
    <Routes>
        <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
        <Route exact path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
        <Route path = "/dogs" element = {<DogList />} />
    </Routes>
  );
}

export default UrlRoutes;
