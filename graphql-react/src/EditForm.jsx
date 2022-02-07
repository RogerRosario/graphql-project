import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_PERSON } from "./graphql/mutations";
import { Route, Routes, Link } from "react-router-dom";
import { App } from './App'


export const EditForm = () => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')

    const [ editPerson ] = useMutation(EDIT_PERSON)

    const handleSubmit = e => {

        e.preventDefault()

        editPerson({variables: { id, name, lastName, age}})

        setId('')
        setName('')
        setLastName('')
        setAge('')
    }

    const EditPerson = () => {
        return(
            <App/>
        )
    }

    return (

        <div>
            <h2>Editar persona</h2>
            <form onSubmit={handleSubmit}>

                <li>    <input id="id" placeholder="id" type="text" value={id} onChange={ev => setId(ev.target.value)} /></li>
                <li>    <input placeholder="Name" type="text" value={name} onChange={ev => setName(ev.target.value)} /></li>
                <li>    <input placeholder="Last Name" type="text" value={lastName} onChange={ev => setLastName(ev.target.value)} /></li>
                <li>    <input placeholder="Age" type="text" value={age} onChange={ev => setAge(ev.target.value)} /></li>
                <button className="mt-2 btn btn-success"> Editar </button>
            </form>

            <Routes>
                <Route path="/edit/:id" element={<EditPerson/>}/>
            </Routes>
            
        </div>
        

    );

}