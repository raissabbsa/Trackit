import { useContext } from "react"
import styled from "styled-components"
import { TrackContext } from "../contexts/TrackContext"

export default function Header(){
    const {user} = useContext(TrackContext)
    return(
        <Top>
            <h1>Trackit</h1>
            <img data-identifier="avatar" src={user.image} alt={user}></img>
        </Top>
    )
}

const Top = styled.div`
    background-color: #1D6BA5;
    z-index: 4;
    color: white;
    font-family: 'Playball', cursive;
    font-size: 40px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 18px;
    padding-left: 18px;
    height: 70px;
    box-sizing: border-box;
    img{
        width: 51px;
        height: 51px;
        border-radius: 30px;
        margin-right: 0;
    }

    `