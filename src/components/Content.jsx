

import { React } from 'react';

const Content = ({partOfSpeech, definitions}) =>{

    console.log(definitions)
    if (definitions){
        
    }
    return(
   
       <div className=" pl-44 pt-9 w-full h-full">
        <h1 className=" font-semibold text-4xl pt-9">Things</h1> 
     <p className="flex pt-8 font-medium">{partOfSpeech}
     <hr className=" w-10/12 mt-3 ml-6"/>
     </p> 
        <p className="flex pt-4 font-extralight pb-4">Meanings</p>
        <ul className=" list-disc px-10 text-gray-800 text-s space-y-2 text-primary">
         
          
        </ul>

<div className="flex w-full pt-8 h-full">
        <a className=" font-extralight pr-5">Synonyms</a> 
        
        <a href="" className="text-purple-700 cursor-pointer pr-5">Example</a>
        
        
</div>
       </div>

    )
}

export default Content