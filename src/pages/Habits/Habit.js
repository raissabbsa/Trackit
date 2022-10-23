import styled from "styled-components"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import AddNewHabit from "./AddNewHabit"
import ItemHabit from "./ItemHabit"
import { TrackContext } from "../../contexts/TrackContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"

export default function Habit() {
    const { setHabit, token } = useContext(TrackContext)
    const [allHabits, setAll] = useState()

    useEffect(searchInfo, [token])

    function searchInfo(){
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = axios.get(URL, config)
        promise.then((res) => {
            setAll(res.data)
        })
        promise.catch((err) => console.log(err.response.data))
    }

    if (allHabits === undefined) {
        return (
            <Container>
                <Header />
                <AddHabit>
                    <h2>Meus Hábitos</h2>
                    <button onClick={() => setHabit(true)}>+</button>
                </AddHabit>
                <AddNewHabit />
                <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
                <Footer />
            </Container>
        )
    }
    else {
        return (
            <Container>
                <Header />
                <AddHabit>
                    <h2>Meus Hábitos</h2>
                    <button onClick={() => setHabit(true)}>+</button>
                </AddHabit>
                <AddNewHabit />
                <List>
                    {allHabits.map((e) => <ItemHabit e={e}  key={e.id} searchInfo={searchInfo}/>)}
                </List>
                <Footer />
            </Container>)
    }
}
const Container = styled.div`
    box-sizing: border-box;
    background-color: #F2F2F2;
    &>h2{
        margin-left: 17px;
        color: #666666;
        font-size: 18px;
        margin-top: 18px;
        width: 350px;
    }
`

const AddHabit = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 18px;
    color: #126BA5;
    font-size: 23px;
    margin-top: 70px;
    box-sizing: border-box;
    button{
        background-color: #52B5FB;
        cursor: pointer;
        color: white;
        font-size: 27px;
        width: 40px;
        height: 35px;
        border: none;
        border-radius: 10px;
    }
`

const List = styled.div`
    margin-bottom: 100px;
`
