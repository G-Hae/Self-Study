import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";

//1) Find toDO based on the id[2] (index) -> How to find an object
//2)


function ToDo({text, category, id}:IToDo){
    const setTodos =useSetRecoilState(toDoState); 
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) =>{
    const {
        currentTarget:{ name },
     } = event;

    setTodos((oldToDos) =>{
        const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
        const newToDo = { text, id, category: name as any };
        return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex+1),
        ];
    });
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