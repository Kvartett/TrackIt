import styled from "styled-components"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import DayHabit from "./DayHabit"
import dayjs from "dayjs"
import "dayjs/locale/en-au"
import { useAuth } from "../../providers/auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"

export default function TodayPage() {
    const { user, config, percentage, setPercentage } = useAuth()
    const navigate = useNavigate()
    const [date, setDate] = useState("")
    const [todayHabits, setTodayHabits] = useState([])

    useEffect(() => {
        if (user.token === "") {
            navigate("/")
        } else {
            setDate(getDate)
            getTodayHabits()
        }
    }, [])

    useEffect(() => {
        checkPercentage()
    }, [todayHabits])

    function getDate() {
        return dayjs().locale("pt-br").format("dddd, DD/MM");
    }

    function getTodayHabits() {
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(res => setTodayHabits(res.data))
            .catch(err => alert(err.response.data.message))
    }

    function reloadTodayHabits() {
        getTodayHabits()
    }

    function checkPercentage() {
        const totalHabitsToday = todayHabits.length
        let checkHabits = 0;
        let todayPercentage = 0;
        todayHabits.forEach((habit) => {
            if (habit.done) {
                checkHabits++
            }
        })
        if (totalHabitsToday > 0) {
            todayPercentage = Math.floor((checkHabits / totalHabitsToday) * 100)
        }
        if (todayPercentage !== percentage) setPercentage(todayPercentage)
    }

    function getPercentage() {
        return (percentage === 0) ? <p>Nenhum hábito concluido ainda</p> : <p>{percentage}% dos hábitos concluídos</p>
    }

    const subtitle = getPercentage()

    return (
        <>
            <NavBar />
            <Footer />
            <ContentContainer>
                <h2>{date}</h2>
                {subtitle}
                {todayHabits.map((habit) => <DayHabit reloadTodayHabits={reloadTodayHabits} habit={habit} key={habit.id} />)}
            </ContentContainer>
        </>
    )
}

const ContentContainer = styled.div`
    height: 100%;
    background-color: #f3f3f3;
    padding: 90px 17px 110px 17px;
    h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`