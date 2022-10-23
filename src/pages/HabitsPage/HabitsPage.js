import { useState } from "react"
import styled from "styled-components"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import AddHabits from "./AddHabits"
import Habits from "./Habits"

export default function HabitsPage() {
    const [habits, setHabits] = useState(undefined)

    return (
        <>
            <NavBar />
            <ContentContainer>
                <AddHabits />
                <Habits habits={habits} setHabits={setHabits} />
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