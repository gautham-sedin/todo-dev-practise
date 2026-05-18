function TodoItem({ text, completed, onDelete, onToggle }) {
    console.log(`Rendering TodoItem: ${text}, completed: ${completed}`);
    return (
        <li>
            <input 
                type="checkbox"
                checked={completed}
                onChange={onToggle}
            />
            <span style={{ textDecoration: completed ? "line-through" : "none" }}>
                {text}
            </span>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
}

export default TodoItem;