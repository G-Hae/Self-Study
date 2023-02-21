import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";

function ToDo({text, category, id}:IToDo){
    const setTodos =useSetRecoilState(toDoState); 
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) =>{
    const {
        currentTarget:{ name },
     } = event;
    };

    return (
    <li>
        <span>{text}</span>
        {category !== "DOING" && <button name="DOING" onClick={onClick}>Doing</button>}
        {category !== "TO_DO" && <button name="TO_DO" onClick={onClick}>ToDo</button>}
        {category !== "DONE" && <button  name="DONE" onClick={onClick}>DONE</button> }    
     </li>
    );
}

export default ToDo;