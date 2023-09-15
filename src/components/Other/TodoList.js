import { useState, useEffect } from 'react';
import styles from './TodoList.module.css';
import Task from './Task/Task';
import Layout from '../Layout/Layout';

export default function TodoList() {

  let [tasks, setTasks] = useState([]);
  let [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (newTask && newTask !== "") {
      const taskId = Date.now();
      setTasks([...tasks, { id: taskId, name: newTask }]);
    }
    // eslint-disable-next-line
  }, [newTask]);

  const handleAddTask = (event) => {
    event.preventDefault();
    const input = document.querySelector(".todo-input");
    const name = input.value;
    setNewTask(name);
    input.value = "";
  }

  const handleRemoveTask = (id) => {
    tasks = tasks.filter((task) => task.id !== id);
    setTasks(tasks);
  }

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            Lista de Tarefas
            <div id="border"></div>
          </h3>
        </div>
        <form className={styles.form}>
          <input
            className="todo-input"
            type="text"
            placeholder="Adiciona tarefa"
          />
          <button
            className={styles.todo_btn}
            onClick={handleAddTask}
            type="submit">
            Adicionar
          </button>
        </form>
        <div id='myUnordList'>
          <ul className="todo-list">
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                remove={handleRemoveTask}
              />))
            };
          </ul>
        </div>
      </div>
    </Layout>
  )
}
