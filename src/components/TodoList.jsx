import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({ list, remove }) => {
	if (list?.length === 0) {
		return (
			<div className="empty">
				All tasks completed
			</div>
		);
	}

	return (
		<div className="todo-list">
			{list.map((entry, index) => (
				<TodoItem entry={entry} index={index} remove={remove} />
			))}
		</div>
	);
};

export default TodoList;
