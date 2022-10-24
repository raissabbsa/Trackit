import styled from "styled-components"
import { TrackContext } from "../../contexts/TrackContext"
import { useContext } from "react"
import axios from "axios"

export default function NewHabit({ el, content, searchHabits }) {
    const { token, setPercentage} = useContext(TrackContext)
    let finishTasks = [];

    if (content.length > 0) {
        content.forEach(element => {
            if (element.done === true) {
                finishTasks.push(element.id)
            }
        });
        setPercentage(finishTasks.length*100/content.length)
    }

    function finishHabit() {

        if (el.done === true) {
            finishTasks.filter((e) => e !== el.id)
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${el.id}/uncheck`
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promise = axios.post(URL, {}, config)
            promise.then((res) => {
                searchHabits()
            })

            promise.catch((err) => {
                console.log(err.response.data.message)
            })
        }
        else {
            finishTasks.push(el.id)
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${el.id}/check`
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promise = axios.post(URL, {}, config)
            promise.then((res) => {
                searchHabits()
            })
            promise.catch((err) => {
                console.log(err.response.data.message)
            })
        }
    }
    return (
        <Item clicou={el.done} itsEqual={el.currentSequence === el.highestSequence}>
            <Text>
                <h3>{el.name}</h3>
                <h4>Sequência atual: {el.currentSequence} dias</h4>
                <h5>Seu recorde: {el.highestSequence} dias</h5>
            </Text>
            <ion-icon
                data-identifier="done-habit-btn" 
                onClick={finishHabit}
                name="checkbox"
            >
            </ion-icon>
        </Item>
    )
}
const Item = styled.div`
    background-color: #FFFFFF;
    box-sizing: border-box;
    width: 340px;
    height: 94px;
    margin-left: 17px;
    margin-top: 30px;   
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    padding: 10px;
    color: #666666;
    ion-icon{
        color: ${props => props.clicou === true ? "#8FC549" : "#EBEBEB"};
        border-radius: 10px;
        border: none;
        height: 70px;
        width: 70px;
        cursor: pointer;
    }
    h4{
        font-size: 15px;
        margin-bottom: 3px;
        color: ${props => props.clicou ? "#8FC549" : "#666666"};
    }
    h5{
        font-size: 15px;
        margin-bottom: 3px;
        color: ${props => props.clicou && props.itsEqual ? "#8FC549" : "#666666"};
    }
    h3{
        font-size: 20px;
        margin-bottom: 8px;
    }

`
const Text = styled.div`
    display: flex;
    flex-direction: column;
`
