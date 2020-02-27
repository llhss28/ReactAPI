import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import Characters from "./Characters/Characters"
import About from "./About"
import List from "./Characters/List"

function App(){
    return(
        <div>

            <nav>
               <Link to ="/">Home</Link>
               <Link to = "/Characters">Characters</Link>
               <Link to = "./About">About</Link>

               <Switch>
                   <Route exact path = "/"><Home /></Route>
                   <Route exact path = "/Characters"><Characters /></Route>
                   <Route path = "/About"><About /></Route>
                   <Route path = "/Characters/:charId"><List /></Route>
                    <Route path = "/Characters/List"><List /></Route>
               </Switch>
            </nav>
                      
        </div>
    )
}
export default App