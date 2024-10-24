import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import logo from "../images/logo.jpg"

const Chat = ({id}) => {
  return (
    <>

       {/* messages */}
       {/* ai message */}
       <div className=" w-[50rem] flex self-start space-x-3 ">
           {/* logo of chatbot */}
           <img className="bg-purple-300 rounded-full size-9" src={logo}></img>
           {/* */}
           <div className="w-[calc(100%-3rem)] pt-1  dark:text-zinc-200 ">
               hello
           </div>
       </div>
       {/* your response */}
       <div className=" w-[50rem] flex self-end space-x-3 mt-5 ">
           {/* logo of chatbot */}
           <div className="bg-purple-300 rounded-full size-9"></div>
           {/* */}
           <div className="w-[calc(100%-3rem)]  bg-gray-100 dark:bg-[#424242] rounded-md p-2 text-sm dark:text-zinc-200 h-64">
               asdasd
           </div>
       </div>   
    </>
 )
}

export default Chat