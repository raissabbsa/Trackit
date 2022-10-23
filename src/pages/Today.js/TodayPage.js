import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";
import { TrackContext } from "../../contexts/TrackContext"
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import NewHabit from "./NewHabit";
import dayjs from "dayjs";

export default function TodayPage() {
  const { token, percentage } = useContext(TrackContext)
  const [content, setContent] = useState([])

  useEffect(searchHabits, [token])

  function searchHabits() {
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
  }

  function chooseDay() {

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
  function addText() {
    if (percentage > 0) {
      return `${parseInt(percentage)}% dos hábitos concluídos`
    }
    else {
      return "Nenhum hábito concluído ainda"
    }
  }

  return (
    <Container percentage={percentage}>
      <Header />
      <h2>{chooseDay()}, {dayjs().date()}/{dayjs().month() + 1}</h2>
      <p>{addText()}</p>
      <ListOffHabits>
        {content.map((el) => <NewHabit key={el.id} el={el} searchHabits={searchHabits} content={content} />)}
      </ListOffHabits>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
    box-sizing: border-box;
    background-color: #F2F2F2;
    &>h2{
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
    &>p{
        color: ${props => props.percentage > 0 ? "#8FC549" : "#BABABA"};
        margin-left: 0 auto;
        padding-left: 17px;
        font-size: 18px;
        margin-top: 5px;
    }
`
const ListOffHabits = styled.div`
  margin-bottom: 200px;
`
