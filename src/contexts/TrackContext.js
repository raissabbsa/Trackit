import { useState, createContext } from "react";

export const TrackContext = createContext()

export default function UserProvider({children}){

    const [user, setUser] = useState([]);
    const [addHabit, setHabit] = useState(false)
    const [infos, setInfos] = useState({ name: "", days: [] })
    const [token, setToken] = useState()
    const [percentage, setPercentage] = useState(0)

    return(
        <TrackContext.Provider
            value={{user, setUser, addHabit, setHabit, infos, setInfos, token, setToken, percentage, setPercentage}}
        >
            {children}
        </TrackContext.Provider>
    )
}