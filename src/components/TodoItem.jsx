import './TodoItem.css';

const TodoItem = ({ index, entry, remove }) => {
	return (
		<div className="todo">
			<div className="todo-entry" key={index}>{entry}</div>
			<button className="delete-button" onClick={() => remove(entry)}>
				Delete
			</button>
		</div>
	);
};

export default TodoItem;
