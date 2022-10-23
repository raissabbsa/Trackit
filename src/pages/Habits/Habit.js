import styled from "styled-components"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import AddNewHabit from "./AddNewHabit"
import { TrackContext } from "../../contexts/TrackContext"
import { useContext } from "react"

export default function Habit(){
    const {setHabit} = useContext(TrackContext)

    return(
        <Container>
            <Header/>
            <AddHabit>
                <h2>Meus Hábitos</h2>
                <button onClick={() => setHabit(true)}>+</button>
            </AddHabit>
            <AddNewHabit/>
            <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
            <Footer/>
        </Container>
    )
}
const Container = styled.div`
    box-sizing: border-box;
    background-color: #F2F2F2;
    height: 100vh;
    h2{
        margin: 10px auto;
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
