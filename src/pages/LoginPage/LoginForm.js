import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../providers/auth"
import { ThreeDots } from "react-loader-spinner"


export default function LoginForm() {
    const { setUser } = useAuth()
    const [isDisable, setIsDisabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function logIn(e) {
        e.preventDefault()
        setIsLoading(true)

        const body = { ...form }
        setIsDisabled(!isDisable)

        const promise = axios.post(`${BASE_URL}/auth/login`, body)
        promise.then(res => {
            setUser(res.data)
            navigate("/today")
        })

        promise.catch(err => {
            alert(err.response.data.message)
            setIsLoading(false)
        })
    }

    return !isLoading ? (
        <Form onSubmit={logIn}>
            <input name="email" value={form.email} onChange={handleForm} placeholder="Email" type="email" />
            <input name="password" value={form.password} onChange={handleForm} placeholder="Password" type="password" />
            <button type="submit">Log in</button>
        </Form>
    ) : (
        <Form>
            <input disabled name="email" value={form.email} placeholder="Email" type="email" />
            <input disabled name="password" value={form.password} placeholder="Password" type="password" />
            <button className="load-button">
                <ThreeDots className="loader" color="#FFFFFF" height={50} width={50} />
            </button>
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
        background-color: #FFFFFF;
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
    .load-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`