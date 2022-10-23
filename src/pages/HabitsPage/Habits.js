import styled from "styled-components"
import Habit from "./Habit"

export default function Habits(props) {
    const { reloadHabits, habits } = props

    if (habits === undefined || habits.length === 0) {
        return <NoHabit>You don't have any habits registered yet. Add a habit to start tracking!</NoHabit>
    }

    return (
        <HabitsContainer>
            {habits.map((habit) => <Habit reloadHabits={reloadHabits} habit={habit} key={habit.id} />)}
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