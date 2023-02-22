import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "./atoms";
import CreateToDO from "./CreateToDo";
import ToDo from "./ToDo";



function ToDoList(){
    const [toDo, doing, done] = useRecoilValue(toDoSelector);

    return <div>
        <h1>To Dos</h1>
        <hr/>
        <CreateToDO />
        <h2>To Do</h2>
        <ul>
            {toDo.map((toDo) =><ToDo key={toDo.id} {...toDo} />)}
        </ul>
        <hr/>
        <h2>Doing</h2>
        <ul>
            {doing.map((toDo) =><ToDo key={toDo.id} {...toDo} />)}
        </ul>
        <hr/>
        <h2>Done</h2>
        <ul>
            {done.map((toDo) =><ToDo key={toDo.id} {...toDo} />)}
        </ul>

    </div>
}


export default ToDoList;

