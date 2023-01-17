import React, { useState } from "react";
import styled from "styled-components";

function App() {

  const Container = styled.div`
  background-color: ${(props)=>props.theme.bgColor};
    
  `

  const H1 = styled.h1`
  color: ${(props)=>props.theme.textColor};
  `

  const [value, setValue] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
    };

  const onSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log("hello", value)
  };

  interface DummyProps{
    text: string;
    active?:boolean;
  };

  function Dummy({text, active = false}:DummyProps){
    return <h1>{text}</h1>
  };

  const onClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log('이벤트타입지정하는 법')
  }

  return (
    <Container>
      <H1>Hi Everybody</H1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={value} type="text" placeholder="username"/>
        <button>LOG IN</button>
        <Dummy active text="안녕하니"/>
        <form>
          <button onClick={onClick}>Click ME!</button>
        </form>
      </form>
    </Container>
  )
}

export default App;



