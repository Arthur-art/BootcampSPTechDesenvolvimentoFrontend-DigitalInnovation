import React, { useState, Fragment } from "react";

const task = [
  {
    task: "task1",
  },
  {
    task: "task2",
  },
  {
    task: "task3",
  },
  {
    task: "task4",
  },
  {
    task: "task5",
  },
];

export const ToDoList = () => {

    const [newTask, setNewTask] = useState({})
    const [allTasks, setAllTasks] = useState([])

    const handleChange = ({target})=>{
        const {name, value} = target;
        setNewTask((prev)=>({
            ...prev,
            id:Date.now(),
            [name]: value
        }))
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setAllTasks((prev)=>([
            newTask,
            ...prev
        ]))
        setNewTask({})
    }

    const handleDelete = (idDelete)=>{
       setAllTasks((prev)=> prev.filter((task)=>{
           console.log(task)
           return task.id !== idDelete;
       }))
    }



  const form = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={newTask.task || ""} name="task" />
      <button type="submit">Adicionar</button>
    </form>
  );
  const showData = (
    <ul>
      {allTasks.map(({ task, id }) => {
        return (
        <Fragment>
        <li key={id}>{task}</li>
        <button onClick={()=> handleDelete(id)}>X</button>
        </Fragment>
            );
      })}
    </ul>
  );

  return <Fragment>
      {form}
      {showData}
      </Fragment>;
};
