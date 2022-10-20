import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import { useState } from "react"
import axios from "axios"

export default function Registracion({setUser}){
    const navigate = useNavigate()
    const [form,setForm] = useState({email:"", name:"", image:"", password:""})

    function fillForm(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function submitForm(e){
        e.preventDefault();
        const URL= "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const promisse = axios.post(URL, form)
        promisse.then((res) => {
            setUser(res.data)
            navigate("/")
        })
        promisse.catch((err) => {
            alert(err.response.data.message)
        })
    }

    return(
        <Container>
            <img src={logo} alt="logo" />
            <form onSubmit={submitForm}>
                <input
                    placeholder="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={fillForm}
                    required />
                <input
                    placeholder="senha"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={fillForm}
                    required />
                <input
                    placeholder="nome"
                    type="name"
                    name="name"
                    value={form.name}
                    onChange={fillForm}
                    required />
                <input
                    placeholder="foto"
                    type="url" 
                    name="image"
                    value={form.image}
                    onChange={fillForm}
                    required />
                <button type="submit">Cadastrar</button>
            </form>
            <p onClick={() => navigate("/")}>Já tem uma conta? Faça Login!</p>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        margin-top: 68px;
        margin-bottom: 30px;
        width: 180px;
    }
    button{
        width: 303px;
        height: 45px;
        color: white;
        background-color: #52B5FB;
        border: 1px solid #52B5FB;
        border-radius: 5px;
        text-align: center;
        font-size: 21px;
        cursor: pointer;
    }
    p{
        font-size: 14px;
        font-weight: medium;
        color: #52B5FB;
        margin-top: 25px;
        margin-bottom: 40px;
        text-decoration-line: underline;
        cursor: pointer;
    }
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D4D4D4;
        color: #AFAFAF;
        border-radius: 5px;
        margin-bottom: 6px;
        padding: 10px;
        font-size: 20px;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
