import styled from "styled-components"

export default function Footer() {
    return (
        <Bar>
            <p>Hábitos</p>
            <button>Hoje</button>
            <p>Histórico</p>
        </Bar>
    )
}
const Bar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #52B6FF;
    padding-right: 30px;
    padding-left: 30px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    button{
        width: 90px;
        height: 90px;
        border: none;
        border-radius: 50px;
        background-color: #52B5FB;
        color: white;
        font-size: 23px;
        margin-bottom: 30px;
    }
`