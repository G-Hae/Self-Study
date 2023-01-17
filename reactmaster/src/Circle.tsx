import { useState } from "react";
import styled from "styled-components"

interface CircleProps{
    bgColor: string;
    borderColor?: string;
    text?: string;
}

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props)=>props.bgColor};
    border-radius: 100px;
    border: 1px solid ${(props)=>props.borderColor};
`

function Circle({bgColor, borderColor, text ="default text"}: CircleProps){
    const [value, setValue] = useState<number|string>(1);


    return <Container bgColor ={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
        </Container>
}

interface PlayerShape{
    name: string;
    age: number;
}

const sayHello = (playerObj:PlayerShape) =>
    `Hello ${playerObj.name} you are ${playerObj.age} years old!`;

sayHello({name:"nico", age: 12})

export default Circle;