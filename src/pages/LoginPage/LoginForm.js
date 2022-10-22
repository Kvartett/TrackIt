import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../providers/auth"


export default function LoginForm() {
    const { setUser } = useAuth()
    const [isDisable, setIsDisabled] = useState(false)
    const [form, setForm] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function logIn(e) {
        e.preventDefault()

        const body = { ...form }
        setIsDisabled(!isDisable)

        const promise = axios.post(`${BASE_URL}/auth/login`, body)
        promise.then(res => {
            setUser(res.data)
            navigate("/today")
        })

        promise.catch(err => alert(err.response.data))
    }

    return (
        <Form onSubmit={logIn}>
            <input disabled={isDisable} name="email" value={form.email} onChange={handleForm} placeholder="Email" type="email" />
            <input disabled={isDisable} name="password" value={form.password} onChange={handleForm} placeholder="Password" type="password" />
            <button type="submit">Log in</button>
        </Form>
    )
}

const Form = styled.form`
    width: 305px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 35px;
    input {
        background-color: ${(props) => props.disabled === true ? "#DCDCDC" : "#FFFFFF"};
        width: 305px;
        height: 45px;
        margin-bottom: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 10px;
        box-sizing: border-box;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 19px;
        line-height: 25px;
        color: #DBDBDB;
    }
    button {
        width: 305px;
        height: 45px;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        box-sizing: border-box;
    }
`