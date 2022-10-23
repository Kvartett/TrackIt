import styled from "styled-components";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function HistoricPage() {
    return (
        <>
            <NavBar />
            <ContentContainer>
                <h2>Historic</h2>
                <p>Soon you will be able to see the history of your habits here!</p>
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
    h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;
    }
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`