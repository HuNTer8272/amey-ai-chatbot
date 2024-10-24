import React,{useState} from 'react'
import { IoAdd } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import logo from "../images/logo.jpg"
import { BsChatSquareTextFill } from "react-icons/bs";
import { NavLink, useParams } from 'react-router-dom';
import Chat from '../components/Chat';
import NewChat from '../components/NewChat';
import { RxHamburgerMenu } from "react-icons/rx";

const ChatArea = () => {
  const { id } = useParams();
  console.log(id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className='dark:bg-[#1d1f1c] bg-gray-200  flex h-screen'>
       {/* sidebar */}
       <div   style={{ width: isSidebarOpen ? '9%' : '5%' }} className={`dark:bg-[#1d1f1c] bg-gray-200  transition-all  flex flex-col justify-between py-5 p-3 h-screen`}>
         <div className="">
             {/* logo */}
             <div className="flex items-center justify-between">
                <div className={`flex items-center space-x-3 `}>
                  <img src={logo} className='size-8' alt='logo'/>
                  <h1 className={`font-semibold ${isSidebarOpen ? 'block' : 'hidden'} dark:text-zinc-200`}>ChatBot</h1>
                </div>
               <div onClick={handleClick} className="dark:hover:bg-[#424242] hover:bg-gray-100  size-8 rounded-full cursor-pointer flex justify-center items-center">
                  <RxHamburgerMenu className='text-lg dark:text-zinc-500'/>
               </div>
             </div>
            {/* user chats history */}
            <div className="mt-10 ">
              <div className="">
                <button className={`flex  dark:bg-[#424242] bg-accent1 text-white dark:text-zinc-200 text-sm font-semibold   rounded-full items-center  ${isSidebarOpen?"w-full px-5 p-1 space-x-2 ":"m-auto size-9 justify-center items-center px-3"}`}><IoAdd/> <span className={`${isSidebarOpen ? 'block' : 'hidden'} `}>New Chat</span></button>
              </div>
              {/* chat history */}
              <div className="mt-5">
                 <button className={`flex items-center  dark:text-zinc-200 ${isSidebarOpen?"w-full px-2 space-x-2 ":"m-auto size-9 justify-center items-center px-2  dark:bg-[#424242] bg-accent1 rounded-full "}`}><BsChatSquareTextFill className={`${isSidebarOpen?"dark:text-[#424242] ":"text-zinc-400"}`}/> <span className={`text-[0.8rem]  w-[80%] line-clamp-1 ${isSidebarOpen ? 'block' : 'hidden'} `}>Lorem ipsum...</span></button>
              </div>
            </div>
         </div>

           <div className="">
              <NavLink to={'/'}>
                <button className={`flex items-center mt-auto space-x-2 dark:text-zinc-200 ${isSidebarOpen?"":"m-auto"} `}><IoIosLogOut className='text-2xl'/> <span className={`${isSidebarOpen ? 'block' : 'hidden'} `}>Logout</span></button>
              </NavLink>
           </div>
       </div>

       {/* chat section */}
       <div style={{ width: `calc(100% - ${isSidebarOpen ? '9%' : '5%'})` }}  className={` flex flex-col rounded-tl-xl h-screen bg-white shadow-sm dark:bg-[#323232]`}>
       <div className="flex items-center justify-end h-10 p-2 py-3 mb-10 ">
             <div className="flex items-center mt-3 space-x-2 text-sm font-semibold dark:text-zinc-200">
               <div className="bg-purple-300 rounded-full size-8 "></div>
               <span>Username</span>
             </div>
           </div>

         <div className="h-[90%] p-5 overflow-y-scroll flex flex-col  scrollbar-hide">
          {id === undefined ? <NewChat/> :<Chat id={id}/>}          
         </div>

         {/* input */}
         <div className="flex justify-center items-center h-[10%] relative">
           <textarea className='w-[90%] resize-none h-12 p-3 px-8 scrollbar-hide placeholder:text-zinc-400 outline-none dark:text-zinc-200 bg-gray-100 dark:bg-[#424242] rounded-full' placeholder='Message...'></textarea>
           <button className={`absolute right-[6.2rem] size-8 flex justify-center items-center text-sm rounded-full  text-white bg-accent1`}><FaArrowUp/></button>
         </div>
       </div>
    </div>
  )
}

export default ChatArea
