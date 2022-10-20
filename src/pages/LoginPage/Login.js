import styled from "styled-components"
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

export default function Login() {
    const navigate = useNavigate()
    const [form,setForm] = useState({email:"", password:""})
    //{id: 6166, name: 'ra', email: 'ra@ra.com', image: 'https://img.ibxk.com.br/2022/10/11/11012514431007.jpg', password: '123abc', …}

    function fillForm(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function login(e){
        e.preventDefault();
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const promisse = axios.post(URL, form)
        
        promisse.then((res) => {
            navigate("/habitos")
        })

        promisse.catch(err => alert(err.response.data.message))
    }


    return (
        <Container>
            <img src={logo} alt="logo" />
            <form onSubmit={login}>
                <input
                    placeholder="email"
                    type="email"
                    value={form.email}
                    name="email"
                    onChange={fillForm}
                />
                <input
                    placeholder="senha"
                    type="password" 
                    value={form.password}
                    name="password"
                    onChange={fillForm}/>
                <button type="submit">Entrar</button>
            </form>
            <p onClick={() => navigate("/cadastro")}>Não tem uma conta? Cadastre-se!</p>
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
        text-decoration-line: underline;
        cursor: pointer;
        margin-bottom: 40px;
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