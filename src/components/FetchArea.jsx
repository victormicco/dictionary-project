import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
export default function FetchArea(){

    const [word, setWord] = useState("")
    const [results, setResults] = useState([])
    const searchWord = async () => {
        const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)

        const data = await response.json()

        setResults(data[0])

    }



    return(
        <div className="container justify-center flex">
                <input type='text' key={index} value={word} onChange={e => setWord(e.target.value)} placeholder="Search a thing..." className=' w-10/12 text-start pl-5 text-black bg-gray-200 border-none outline-none rounded-lg  py-4 shadow-sm'/>
                <button className='-mx-16 text-purple-700 text-xl' onClick={searchWord} key={index}><AiOutlineSearch/></button>
        </div>
    )
}