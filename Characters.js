import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import List from "./List"
const axios = require('axios').default;
class Characters extends React.Component{
    state = {
        loading: false,
        char: []
    } 
    
    componentDidMount(e){
        this.setState({loading: true})
        axios.get('https://swapi.co/api/people')
        .then(response => this.setState({
            char: response.data.results.map(test => test),
            loading: false
        }))
    }

    render(){
        const characters =this.state.char.map(param => 
            <div key = {param.name}>
                <Link to = {`Characters/${param.name}`}>{param.name}</Link>
                <hr/>
            </div>)
        const result = this.state.loading ? "Loading..." : characters
        return(
            <div>
                <h1>
                    Characaters
                </h1>
                <p>{result}</p>
                
            </div>
        )
    }
}
export default Characters