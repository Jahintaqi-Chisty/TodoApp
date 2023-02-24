import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { gql, useQuery } from '@apollo/client'



function App() {

  const {loading,error,data}=useQuery(gql`
  {
       todos{
         id
         title
       }
     }
  
  `)
  if(loading) return <h1>Loading</h1>
  if(error) return <h1>{JSON.stringify(error)}</h1>

  console.log(data)
  
  return (
    <div className="App">
        <p>Hello World</p>
    </div>
  )
}

export default App
