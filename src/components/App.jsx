import { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				const uncompleted = json.filter((todo) => !todo.completed)
					.map((todo) => todo.title);
				setTodos(uncompleted);
				setLoading(false);
			});
	}, []);

	const addTodo = () => {
		if (todo !== '') {
			setTodos([...todos, todo]);
			setTodo('');
		}
	};

	const deleteTodo = (text) => {
		const newTodos = todos.filter((todo) => todo !== text);
		setTodos(newTodos);
	};

	return (
		<div className="App">
			<img className="logo" src="/logo.png" alt="Techover" width={300} />
			<TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
			<TodoList list={todos} remove={deleteTodo} loading={loading} />
		</div>
	);
}

export default App;
