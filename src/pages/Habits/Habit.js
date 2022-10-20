import styled from "styled-components"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Habit({user}){
    console.log(user)

    function addNewHabit(){
        
    }
    return(
        <Container>
            <Header user={user}/>
            <AddHabit>
                <h2>Meus Hábitos</h2>
                <button onClick={addNewHabit}>+</button>
            </AddHabit>
            <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
            <Footer/>
        </Container>
    )
}
const Container = styled.div`
    box-sizing: border-box;
    background-color: #F2F2F2;
    height: 1000px;
    h2{
        margin-left: 18px;
        color: #666666;
        font-size: 18px
    }
`

const AddHabit = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 18px;
    color: #126BA5;
    font-size: 23px;
    margin-top: 30px;
    box-sizing: border-box;
    button{
        background-color: #52B5FB;
        color: white;
        font-size: 27px;
        width: 40px;
        height: 35px;
        border: none;
        border-radius: 10px;
    }
`
