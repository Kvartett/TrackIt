import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import { BASE_URL } from "../../constants/urls"
import { useAuth } from "../../providers/auth"
import AddHabits from "./AddHabits"
import Habits from "./Habits"

export default function HabitsPage() {
    const [habits, setHabits] = useState(undefined)
    const { config, user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user.token === "") {
            navigate("/")
        } else {
            getHabits()
        }
    }, [])

    function getHabits() {
        axios.get(`${BASE_URL}/habits`, config)
            .then(res => setHabits(res.data))
            .catch(err => alert(err.response.data.message))
    }

    function reloadHabits() {
        getHabits()
    }

    return (
        <>
            <NavBar />
            <ContentContainer>
                <AddHabits reloadHabits={reloadHabits} />
                <Habits reloadHabits={reloadHabits} habits={habits} setHabits={setHabits} />
            </ContentContainer>
            <Footer />
        </>
    )
}

const ContentContainer = styled.div`
    width: 100vw;
    height: 100%;
    background-color: #f3f3f3;
    padding: 90px 17px 110px 17px;
    box-sizing: border-box;
`