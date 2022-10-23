import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyle from "./assets/styles/ResetStyle";
import Login from "./pages/LoginPage/Login";
import Registracion from"./pages/LoginPage/Registracion"
import Habit from "./pages/Habits/Habit"
import UserProvider from "./contexts/TrackContext";
import HistoricPage from "./pages/Historic.js/HistoricPage";
import TodayPage from "./pages/Today.js/TodayPage";
export default function App(){
    return(
        <UserProvider>
            <BrowserRouter>
                <ResetStyle />
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/cadastro" element={<Registracion />}></Route>
                    <Route path="/habitos" element={<Habit />}></Route>
                    <Route path="/historico" element={<HistoricPage />}></Route>
                    <Route path="/hoje" element={<TodayPage />}></Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
    
}