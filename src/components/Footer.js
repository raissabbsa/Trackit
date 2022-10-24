import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { useContext } from "react"
import { TrackContext } from "../contexts/TrackContext"
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
    const navigate = useNavigate()
    const { percentage } = useContext(TrackContext)

    return (
        <Bar>
            <p data-identifier="habit-page-action" onClick={() => navigate("/habitos")}>
                Hábitos
            </p>
            <button onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    value={percentage}
                    text={"Hoje"}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        textColor: "white",
                        pathColor: "white",
                        trailColor: "#52B5FB",
                        backgroundColor: "#52B5FB"
                    })}
                />
            </button>
            <p data-identifier="historic-page-action" onClick={() => navigate("/historico")}>
                Histórico
            </p>
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
        width: 100px;
        height: 100px;
        border: none;
        border-radius: 100px;
        font-size: 23px;
        margin-bottom: 30px;
        cursor: pointer;
    }
    p{
        cursor: pointer;
    }
`