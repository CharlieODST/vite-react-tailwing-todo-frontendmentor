import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  {
    id: 1,
    title: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: 2,
    title: "Jog around the park 3x",
    completed: false,
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    title: "Read for 1 hour",
    completed: false,
  },
  {
    id: 5,
    title: "Pick up groceries",
    completed: true,
  },
  {
    id: 6,
    title: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTarea = (title) => {
    const newTarea = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTarea]);
  };

  const updateTarea = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTarea = (id) => {
    const borrarTarea = todos.filter((todo) => todo.id !== id);
    setTodos(borrarTarea);
  };

  const sumTareas = todos.filter((todo) => !todo.completed).length;

  const limpiarTareas = () => {
    const tareasSinCompletadas = todos.filter((todo) => !todo.completed);
    setTodos(tareasSinCompletadas);
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTareas = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-900 dark:bg-gray-950 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
      <Header />

      <main className="container mx-auto mt-8 px-4">
        <TodoCreate crearTarea={createTarea} />

        {/* Todo List (TodoItem) TodoUpdate & TodoDelete*/}
        <TodoList
          tareas={filteredTareas(todos)}
          removeTarea={removeTarea}
          updateTarea={updateTarea}
        />

        <TodoComputed numeroTareas={sumTareas} limpiarTareas={limpiarTareas} />

        <TodoFilter cambiarFiltro={changeFilter} filtro={filter} />
      </main>

      <footer className="mt-8 text-center dark:text-gray-400">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};
export default App;
