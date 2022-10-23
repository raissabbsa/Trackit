import styled from "styled-components"
import { useState } from "react"

export default function ButtonDay({isAble, el, days, setDays}) {
    const [clicada, setClicada] = useState(false)

    function addDay(day){
        setDays([...days, day])
        console.log([...days, day])
        if([...days, day].includes(day)){
            setClicada(true)
        }
        else{
            setClicada(false)
        }
    }
    function chooseDay(el){
        if(el === 0){return "D"} 
        else if(el === 1){return "S"}
        else if(el === 2){return "T"}
        else if(el === 3){return "Q"}
        else if(el === 4){return "Q"}
        else if(el === 5){return "S"}
        else if(el === 6){return "S"}  
    } 
    return (
        <Botao clicada={clicada} disabled={isAble ? "" : "disabled"} onClick={() => addDay(el)}>{chooseDay(el)}</Botao>
    )
}

const Botao = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid ${(props) => props.clicada === true ? "#CFCFCF" : "#D4D4D4"};
    border-radius: 5px;
    background-color: ${(props) => props.clicada === true ? "#CFCFCF" : "#FFFFFF"};
    font-size: 20px;
    color: ${(props) => props.clicada === true ? "#FFFFFF" : "#CFCFCF"};
    margin-right: 4px;
    cursor: pointer;
`