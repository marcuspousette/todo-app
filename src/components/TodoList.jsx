import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({ list, remove, loading }) => {

	if(loading) {
		return (
			<div className="todo-list">
				{[1,2,3,4,5].map((entry, index) => (
					<TodoItem entry={'Loading'} index={index} remove={remove} />
				))}
			</div>
		);
	}

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
