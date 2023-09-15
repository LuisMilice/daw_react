import styles from '../TodoList.module.css'
import { useEffect } from 'react';

export default function Task({ task, remove }) {

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css";
        link.integrity = "sha256-46r060N2LrChLLb5zowXQ72/iKKNiw/lAmygmHExk/o=";
        link.crossOrigin = "anonymous";

        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div className={styles.todo}>
            <li className={styles.todo_item}>{task.name}</li>
            <button
                className={styles.delete_button}
                onClick={() => remove(task.id)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}
