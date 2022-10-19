import styled from "styled-components"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import AddHabits from "./AddHabits"
import Habits from "./Habits"

export default function HabitsPage() {
    return (
        <>
            <NavBar />
            <Content>
                <AddHabits />
                <Habits />
            </Content>
            <Footer />
        </>
    )
}

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f3f3f3;
    padding: 90px 12px 0 12px;
    box-sizing: border-box;
`