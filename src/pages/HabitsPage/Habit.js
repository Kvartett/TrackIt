import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { BASE_URL } from "../../constants/urls"
import { useAuth } from "../../providers/auth"

export default function Habit(props) {
    const { habit, reloadHabits } = props
    const { config } = useAuth()
    const [habitDay, setHabitDay] = useState([
        { day: 7, status: "unselected", weekday: "Sunday", initials: "S" },
        { day: 1, status: "unselected", weekday: "Monday", initials: "M" },
        { day: 2, status: "unselected", weekday: "Tuesday", initials: "T" },
        { day: 3, status: "unselected", weekday: "Wednesday", initials: "W" },
        { day: 4, status: "unselected", weekday: "Thursday", initials: "T" },
        { day: 5, status: "unselected", weekday: "Friday", initials: "F" },
        { day: 6, status: "unselected", weekday: "Saturday", initials: "S" }
    ])

    useEffect(() => {
        let selectedHabitDay = [...habitDay]
        selectedHabitDay.forEach((day) => {
            if (habit.days.includes(day.day)) {
                day.status = "selected"
            }
        })

        setHabitDay(selectedHabitDay)
    }, [])

    function confirmDelete() {
        if (window.confirm("Are you sure you want to delete the habit?")) {
            deleteHabit()
        }
    }

    function deleteHabit() {
        axios.delete(`${BASE_URL}/habits/${habit.id}`, config)
            .then(res => {
                reloadHabits()
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <HabitContainer>
            <p>{habit.name}</p>
            <ButtonsContainer >
                {habitDay.map((w, i) => <button className={w.status} key={i} >{w.initials}</button>)}
            </ButtonsContainer>
            <ion-icon onClick={confirmDelete} name="trash-bin-outline"></ion-icon>
        </HabitContainer>
    )
}

const HabitContainer = styled.li`
    background-color: #FFFFFF;
    width: 340px;
    height: 91px;
    padding: 15px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    position: relative;
    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
    ion-icon {
        font-size: 27px;
        position: absolute;
        top: 12px;
        right: 10px;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: initial;
    align-items: center;
    margin-top: 10px;
    button {
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        box-sizing: border-box;
        margin: 0 1.8px;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        color: #DBDBDB;
    }
    .selected {
        background-color: #52B6FF;
        color: #000000;
        font-weight: 600;
    }
    .unselected {
        background-color: #FFFFFF;
    }
`