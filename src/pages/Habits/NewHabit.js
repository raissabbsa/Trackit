import styled from "styled-components"
import { TrackContext } from "../../contexts/TrackContext"
import { useContext, useState} from "react"
import axios from "axios"


export default function NewHabit({el, content}){
    const { token} = useContext(TrackContext)
    const [clicou, setClicou] = useState(false)
    const [finishTasks, setFinish] = useState(content)


    function finishHabit(){
        if(clicou){setClicou(false)}
        else{setClicou(true)}

        if(finishTasks.includes(el.id)){
            const novoArray = [...finishTasks]
            novoArray.filter((e) => e!==el.id)
            setFinish(novoArray)
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${el.id}/uncheck`
            const config = {
                headers: {
                  "Authorization": `Bearer ${token}`
                }
            }
            const promise = axios.post(URL,{},config)
            promise.then((res) => {
                console.log(res.data, "desmarcou")
            })
          
            promise.catch((err) => {
                console.log(err.response.data.message, "desmarcou")})
        }
        else{
            setFinish([...finishTasks, el.id])
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${el.id}/check`
            const config = {
                headers: {
                  "Authorization": `Bearer ${token}`
                }
            }
            const promise = axios.post(URL,{},config)
            promise.then((res) => {
                console.log(res.data, "marcou")
            })
            promise.catch((err) => {
                console.log(err.response.data.message, "marcou")})
            console.log("oi")}
        console.log(finishTasks)
    }
    return(
        <Item clicou={clicou}>
        <Text>
            <h3>{el.name}</h3>
            <h4>Sequência atual: 3 dias</h4>
            <h4>Seu recorde: 3 dias</h4>
        </Text>
        <ion-icon 
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
    margin: 0px auto;
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