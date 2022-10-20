import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyle from "./assets/styles/ResetStyle";
import Login from "./pages/LoginPage/Login";
import Registracion from"./pages/LoginPage/Registracion"
import Habit from "./pages/Habits/Habit"
import { useState } from "react";

export default function App(){
    const [user, setUser] = useState([]);
    return(
        <BrowserRouter>
            <ResetStyle />
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/cadastro" element={<Registracion setUser={setUser}/>}></Route>
                <Route path="/habitos" element={<Habit user={user}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
    
}