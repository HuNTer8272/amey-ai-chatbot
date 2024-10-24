import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import logo from "../images/logo.jpg"
import { TypeAnimation } from 'react-type-animation';

const NewChat = () => {
  return (
    <div className="">
         {/* messages */}
           <div className="w-[50rem] flex self-start space-x-3">
             <img className="bg-purple-300 rounded-full size-9" src={logo} alt='chatbot logo'></img>
             <div className="w-[calc(100%-3rem)] pt-1 dark:text-zinc-200">
                 <TypeAnimation
                      sequence={[
                        'What can I help you with?',
                        1000, 
                       
                      ]}
                      wrapper="span"
                      speed={50}
                 />

             </div>
           </div>
           {/* <div className="w-[50rem] flex self-end space-x-3 mt-5">
             <div className="bg-purple-300 rounded-full size-9"></div>
             <div className="w-[calc(100%-3rem)] bg-[#424242] rounded-md p-2 text-sm text-zinc-200">asdasd</div>
           </div> */}
    </div>
  )
}

export default NewChat