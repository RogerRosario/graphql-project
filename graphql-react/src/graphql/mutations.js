import { gql } from "@apollo/client";

export const ADD_PERSON = gql`

mutation addPerson($name: String!, $lastName: String!, $age: String!) {
    addPerson(
        name: $name, 
        lastName: $lastName, 
        age: $age
  ) {
        name
        lastName
        age
        id
    }
  }
`

export const EDIT_PERSON = gql`

mutation editPerson($id: ID!, $name: String!, $lastName: String!, $age: String!) {
    editPerson(
        id: $id,
        name: $name, 
        lastName: $lastName, 
        age: $age
        ) {
      id      
      name
      lastName
      age
    }
  }

`

export const DELETE_PERSON = gql`

mutation($id: String!) { 
    deletePerson
        (
        id: $id
        )
  }

`