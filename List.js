import React, { Component, useState, useEffect} from "react"
import {UseParams, useParams} from "react-router-dom"
import Characters from "./Characters"
function List(props){

    const [person, setPerson] = useState({})

    const {charId} = useParams()

    const axios = require('axios').default;

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
        .then(response => {
            const newperson = response.data.results
            let personl = newperson.find(param => param.name === charId)
            console.log(personl)
            setPerson(personl)
        })
    }, [])

    return(

        <div className = "char">
            <h1>Test</h1>
            <h1>Name: {person.name}</h1>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Skin Color: {person.skin_color}</p>
            <p>Eye Color: {person.eye_color}</p>
            <p>Birth Year: {person.birth_year}</p>
            <p>Gender: {person.gender}</p>
        </div>
    )
}

export default List