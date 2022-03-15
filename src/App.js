import React, { useState, useEffect } from "react";
import "./App.css"
import { FiX } from "react-icons/fi";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTasks(storedList);
    }
  }, [])

  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleDelete = (task) => {
    const deleted = tasks.filter((t) => t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted))
  }

  const handleClear = () => {
    setTasks([]);
    localStorage.removeItem("localTasks");
  }
  return (
    <center>
      <div className='container'>
        <h2 className="heading">Daily Tasks-List</h2>
        <div className="">
          <input
            name="task"
            type="text"
            value={task}
            placeholder="Write your task...."
            className="input-form"
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="btn"
            onClick={addTask}
          >
            ADD
          </button>
        </div>
        <div className="badge">
          You have
          {!tasks.length
            ? " no tasks"
            : tasks.length === 1
              ? " 1 task"
              : tasks.length > 1
                ? ` ${tasks.length} tasks`
                : null}
        </div>
        {tasks.map((task) => (
          <div className="list-items">
            <p className="task">
              {task.title}
            </p>
            <FiX onClick={() => handleDelete(task)} className="btn-1" />
          </div>
        ))}
        {!tasks.length ? null : (
          <div>
            <button className="btn-2" onClick={() => handleClear()}>
              Clear All
            </button>
          </div>
        )}
      </div>
    </center>
  );
}