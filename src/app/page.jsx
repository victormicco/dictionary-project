"use client"

import Navbar from "@/components/Navbar"
import FetchArea from "@/components/FetchArea"
import Content from "@/components/Content"
import { ThemeProvider } from "@/hooks/ThemeContext"
import { useState } from "react"
import { AiOutlineSearch } from 'react-icons/ai';



export default function App() {

  const [word, setWord] = useState("")
  const [results, setResults] = useState([])
  const searchWord = async () => {
      const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)

      const data = await response.json()
   

      setResults(data[0])

  }




  return (

  <div className="container bg-primary text-primary h-full w-full fixed ">
   <ThemeProvider>

    <Navbar/>
    <div className="container justify-center flex">
                <input type='text' value={word} onChange={e => setWord(e.target.value)} placeholder="Search a thing..." className=' w-10/12 text-start pl-5 text-black bg-gray-200 border-none outline-none rounded-lg  py-4 shadow-sm'/>
                <button className='-mx-16 text-purple-700 text-xl' onClick={searchWord} ><AiOutlineSearch/></button>
        </div>

    
      {results?.meanings?.lenght > 0 && 
      <>
      
      <Navbar/>
      {results.meanings?.map((content, index) => {
        return <Content {...content} key={index}/>
      })
}
      </>
    }
    <Content />
   </ThemeProvider>
    
    

    </div>
   
  )
}
