import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import signal from "../../assets/images/signal.png"
import { BASE_URL } from "../../constants/urls"
import { useAuth } from "../../providers/auth"

export default function DayHabit(props) {
    const { config } = useAuth()
    const { habit, reloadTodayHabits } = props
    const [check, setcheck] = useState(false)

    function markCheck() {
        if (habit.done) {
            axios.post(`${BASE_URL}/habits/${habit.id}/uncheck`, {}, config)
                .then(res => reloadTodayHabits())
                .catch(err => alert(err.response.data.message))
        } else {
            axios.post(`${BASE_URL}/habits/${habit.id}/check`, {}, config)
                .then(res => reloadTodayHabits())
                .catch(err => alert(err.response.data.message))
        }
    }

    return (
        <DayHabitContainer>
            <TodayHabit>
                <h3>{habit.name}</h3>
                <p>Current Sequence {habit.currentSequence}</p>
                <p>Highest Sequence {habit.highestSequence}</p>
            </TodayHabit>
            <Retangle onClick={markCheck} check={habit.done}>
                <img src={signal} />
            </Retangle>
        </DayHabitContainer>
    )
}

const DayHabitContainer = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px;
    box-sizing: border-box;
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
`

const TodayHabit = styled.div`
    h3 {
        display: inline-block;
        height: 30px;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
    p {
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`

const Retangle = styled.div`
    background-color: ${props => props.check === false ? "#E7E7E7" : "#8FC549"};
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`