import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ChatArea from './pages/ChatArea';

function App() {
  return (
    <Routes>
       <Route path="/" element={<SignIn/>} />
       <Route path="/singup" element={<SignUp/>} />
       <Route path="/chat/:id?" element={<ChatArea/>} />

    </Routes>
  );
}

export default App;
