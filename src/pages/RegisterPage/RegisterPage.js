import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../components/Logo"
import RegisterForm from "./RegisterForm"

export default function RegisterPage() {
    const navigate = useNavigate()

    function goToLogin() {
        navigate("/")
    }

    return (
        <PageContainer>
            <Logo />
            <RegisterForm />
            <p onClick={goToLogin} >I already have an account, Log in</p>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px auto;
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 25px;
    }
`