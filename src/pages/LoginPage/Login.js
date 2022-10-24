import styled from "styled-components"
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { TrackContext } from "../../contexts/TrackContext"
import { useContext } from "react"
import {ThreeDots} from 'react-loader-spinner';

export default function Login() {
    const{setUser, setToken} = useContext(TrackContext)
    const navigate = useNavigate()
    const [form,setForm] = useState({email:"", password:""})
    const [loading, setLoading] = useState(false)
    function fillForm(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function login(e){
        e.preventDefault();
        setLoading(true)
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const promisse = axios.post(URL, form)
        
        promisse.then((res) => {
            setUser(res.data)
            setToken(res.data.token)
            navigate("/hoje")
        })

        promisse.catch(err => {
            setLoading(false)
            alert(err.response.data.message)})
    }


    return (
        <Container>
            <img src={logo} alt="logo" />
            <form onSubmit={login}>
                <input
                d   ata-identifier="input-email"
                    placeholder="email"
                    type="email"
                    value={form.email}
                    name="email"
                    onChange={fillForm}
                    disabled={loading ? "disabled" : ""}
                />
                <input
                    data-identifier="input-password"
                    placeholder="senha"
                    type="password" 
                    value={form.password}
                    name="password"
                    onChange={fillForm}
                    disabled={loading ? "disabled" : ""}
                    />
                <button data-identifier="login-btn"
                    type="submit" disabled={loading ? "disabled" : ""}>
                    {loading? (<ThreeDots color="#DDDDDD" height={13} width={300} radius="9" ariaLabel="loading"/>) : ("Entrar")}
                </button>
            </form>
            <p data-identifier="sign-up-action" onClick={() => navigate("/cadastro")}>Não tem uma conta? Cadastre-se!</p>
            <div></div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    img{
        margin-top: 68px;
        margin-bottom: 30px;
        width: 180px;
        background-color: #FFFFFF;
    }
    button{
        width: 100%;
        height: 45px;
        color: white;
        background-color: #52B5FB;
        border: 1px solid #52B5FB;
        border-radius: 5px;
        text-align: center;
        font-size: 21px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
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
    &>div{
        background-color: #FFFFFF;
        height: 200px;
    }
    
`