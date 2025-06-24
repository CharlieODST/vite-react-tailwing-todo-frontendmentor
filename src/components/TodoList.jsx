import TodoItem from "./TodoItem";

const TodoList = ({ tareas, removeTarea, updateTarea }) => {
  return (
    <div className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-900 dark:bg-gray-800 [&>article]:p-4">
      {tareas.map((tarea) => (
        <TodoItem
          key={tarea.id}
          tarea={tarea}
          quitarTarea={removeTarea}
          actualizarTarea={updateTarea}
        />
      ))}
    </div>
  );
};

export default TodoList;
