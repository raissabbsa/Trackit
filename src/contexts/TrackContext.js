import { useState, createContext } from "react";

export const TrackContext = createContext()

export default function UserProvider({children}){

    const [user, setUser] = useState([]);
    const [addHabit, setHabit] = useState(false)
    const [infos, setInfos] = useState({ name: "", days: [] })
    const [token, setToken] = useState()

    return(
        <TrackContext.Provider
            value={{user, setUser, addHabit, setHabit, infos, setInfos, token, setToken}}
        >
            {children}
        </TrackContext.Provider>
    )
}