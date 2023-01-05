import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

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
			<TodoList list={todos} remove={deleteTodo} />
		</div>
	);
}

export default App;
