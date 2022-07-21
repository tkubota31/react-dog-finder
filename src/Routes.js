import React from "react"
import {Route, Switch, Redirect} from "react-router-dom"

const Routes = () =>{
    return(
        <Switch>
            <Routes>
                <Route exact path="/dogs">
                    <DogList dogs={dogs} />
                </Route>

                <Route exact path="/dogs/:name">
                    <DogDetails dogs={dogs} />
                </Route>
                <Redirect to="/dogs" />
            </Routes>
        </Switch>
    )
}

export default Routes
