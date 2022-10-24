import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import { TrackContext } from "../../contexts/TrackContext"
import ItemHAbitButton from "./ItemHabitButton"

export default function ItemHabit({ e, searchInfo }) {
    const { token } = useContext(TrackContext)
    const arrayDias = [0, 1, 2, 3, 4, 5, 6]

    function deleteHabit() {
        if (window.confirm('Você tem certeza que quer deletar esta tarefa?')) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${e.id}`
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promise = axios.delete(URL, config)
            promise.then((res) => {
                searchInfo()
            })
            promise.catch((err) => console.log(err.response.data))
        }
    }

    return (
        <Container>
            <div data-identifier="habit-name">{e.name}</div>
            <Dias>
                {arrayDias.map((el) => <ItemHAbitButton key={el} el={el} days={e.days} />)}
            </Dias>
            <Icone>
                <ion-icon data-identifier="delete-habit-btn"
                    onClick={deleteHabit}
                    name="trash-outline">
                </ion-icon>
            </Icone>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 91px;
    margin: 0px auto;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 10px;
    div{    
        font-size: 20px;
        color: #666666;
        margin-left: 18px;
        margin-bottom: 10px;
        margin-top:10px;
    }

`
const Dias = styled.div`
    display: flex;
    margin-left: 18px;
`

const Icone = styled.div`
    position: absolute;
    top: 0;
    right: 4px;
    ion-icon{
        width: 18x;
        cursor: pointer;
    }
`



