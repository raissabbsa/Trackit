import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { TrackContext } from "../../contexts/TrackContext"
import ButtonDay from "./ButtonDay"

export default function AddNewHabit(){
    const {addHabit, setHabit, setInfos, token} = useContext(TrackContext)
    const [days, setDays] = useState([])
    const [name, setName] = useState("")
    const [isAble, setAble] = useState(true)
    const navigate = useNavigate()
    const arrayDias = [0,1,2,3,4,5,6]
    
    function submitInfos(){
        setInfos({name:name, days: days})
        const data = {name:name, days: days}

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const config = {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }

        const promise = axios.post(URL, data, config)

        promise.then((res) => {
            setAble(false)
            setName("")
            setHabit(false)
            setDays([])
            navigate("/hoje")
        })
      
        promise.catch((err) => {
            setAble(true)
            alert(err.response.data.message)})

    }  

    if(addHabit){
        return(
            <Container>
                <input type="text" 
                data-identifier="input-habit-name"
                placeholder="nome do hábito"
                value={name}
                name="name"
                onChange={e => setName(e.target.value)}
                disabled={isAble ? "" : "disabled"}
                />
                <Dias>
                    {arrayDias.map((el) => <ButtonDay key={el} isAble={isAble} el={el} days={days} setDays={setDays}/>)}
                </Dias>
                <Botoes>
                    <button data-identifier="cancel-habit-create-btn" onClick={() => setHabit(false)}>
                        Cancelar
                    </button>
                    <button data-identifier="save-habit-create-btn" onClick={submitInfos}>
                        Salvar
                    </button>
                </Botoes>

            </Container>
        )
    }
    else{
        return ("")
    }
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    border-radius: 5px;
    height: 200px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    margin: 0 auto 10px;
    &>input{
        margin: 18px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        padding-left: 10px;
        font-size: 20px;
    }
`

const Dias = styled.div`
    display: flex;
    margin-left: 18px;
`

const Botoes = styled.div`
    margin-top: 36px;
    display: flex;

    button:first-child{
        margin-left: 140px;
        margin-right:23px;
        height: 35px;
        width: 69px;
        background-color: #FFFFFF;
        color: #52B6FF;
        font-size: 17px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        text-align: center;
    }
    button:nth-child(2){
        height: 35px;
        width: 69px;
        background-color: #52B5FB;
        color: white;
        font-size: 17px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        text-align: center;
    }
`