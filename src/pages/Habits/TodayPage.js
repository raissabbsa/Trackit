import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";
import { TrackContext } from "../../contexts/TrackContext"
import { useEffect, useContext, useState} from "react";
import axios from "axios";
import NewHabit from "./NewHabit";
import dayjs from "dayjs";

export default function TodayPage(){
    const { token} = useContext(TrackContext)
    const [content, setContent] = useState([])

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    
        const config = {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
    
        const promise = axios.get(URL, config)
    
        promise.then((res) => {
          setContent(res.data)
        })
    
        promise.catch((err) => console.log(err.response.data))
    }, [])

    function chooseDay(){

      switch (dayjs().day()) {
        case 0: return "Domingo"
        case 1: return "Segunda"
        case 2: return "Terça"
        case 3: return "Quarta"
        case 4: return "Quinta"
        case 5: return "Sexta"
        case 6: return "Sábado"
        default: return ""
      }
    }    

    return(
        <Container>
            <Header />
            <h2>{chooseDay()}, {dayjs().date()}/{dayjs().month()+1}</h2>
            <p>Nenhum hábito concluído ainda</p>
            {content.map((el) => <NewHabit key={el.id} el={el} content={content}/>)}
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    background-color: #F2F2F2;
    height: 100vh;
    h2{
        color: #666666;
        font-size: 18px;
        margin-top: 60px;
        width: 350px;
        height: 70px;
        display: flex;
        align-items: flex-end;
        font-size: 23px;
        color: #126BA5;
        margin-left: 17px;
    }
    p{
        color: #BABABA;
        margin-left: 0 auto;
        padding-left: 17px;
        font-size: 18px;
        margin-top: 5px;
    }
`