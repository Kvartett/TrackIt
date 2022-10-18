import logo from "../assets/images/logo.png"
import styled from "styled-components"

export default function Logo() {
    return (
        <LogoSize src={logo} />
    )
}

const LogoSize = styled.img`
    width: 180px;
    height: 178px;
`