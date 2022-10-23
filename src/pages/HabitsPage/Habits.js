import axios, { Axios } from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { BASE_URL } from "../../constants/urls"
import WEEKDAYS from "../../constants/weekdays"
import { useAuth } from "../../providers/auth"
import Habit from "./Habit"


export default function Habits(props) {
    const { habits, setHabits } = props
    const { config } = useAuth()

    useEffect(() => {
        axios.get(`${BASE_URL}/habits`, config)
            .then(res => setHabits(res.data))
            .catch(err => console.log(err.response.data))
    }, [])

    if (!habits) {
        return (
            <NoHabit>
                You don't have any habits registered yet. Add a habit to start tracking!
            </NoHabit>
        )
    }

    return (
        <HabitsContainer>
            {habits.map((habit) => <Habit habit={habit} key={habit.id} />)}
        </HabitsContainer>
    )
}

const HabitsContainer = styled.ul`
    width: 100vw;
    margin-top: 30px;
`

const NoHabit = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    margin-top: 30px;
`