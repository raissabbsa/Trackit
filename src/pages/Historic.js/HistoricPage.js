import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";

export default function HistoricPage(){
    return(
        <Container>
            <Header />
            <h2>Histórico</h2>
            <h4>Em breve você poderá ver o histórico dos seus hábitos aqui</h4>
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
        margin-top: 70px;
        width: 350px;
        height: 70px;
        display: flex;
        align-items: center;
        font-size: 23px;
        color: #126BA5;
        margin-left: 17px;
    }
    h4{
        color: #666666;
        margin-left: 0 auto;
        padding-left: 17px;
        font-size: 18px;

    }
`