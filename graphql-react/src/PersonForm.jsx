import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ALL_PERSONS } from "./graphql/queries";
import { ADD_PERSON } from "./graphql/mutations";
import App from "./App";
import { Routes, Route, Link } from "react-router-dom";

export const PersonForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const [addPerson] = useMutation(ADD_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addPerson({ variables: { name, lastName, age } });

    setName("");
    setLastName("");
    setAge("");
  };

  return (
    <div>
      <h2>Agregar nueva persona</h2>
      <form onSubmit={handleSubmit}>
        <li>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </li>
        
        <li>
          <input
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(ev) => setLastName(ev.target.value)}
          />
        </li>

        <li>
          <input
            placeholder="Age"
            type="text"
            value={age}
            onChange={(ev) => setAge(ev.target.value)}
          />
        </li>
        <button className="mt-2"> Agregar </button>
      </form>

      
    </div>
  );
};
