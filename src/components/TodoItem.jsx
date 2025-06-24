import IconCheck from "./icons/IconCheck.jsx";
import IconCross from "./icons/IconCross.jsx";

const TodoItem = ({ tarea, quitarTarea, actualizarTarea }) => {
  const { id, title, completed } = tarea;
  return (
    <article className="flex gap-4 border-b border-b-gray-400 transition-all duration-900 dark:bg-gray-800">
      <button
        className={`h-5 w-5 flex-none rounded-full border-2 border-gray-300 transition-all duration-900 dark:border-gray-600 ${
          completed
            ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
        }`}
        onClick={() => actualizarTarea(id)}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`grow text-gray-600 transition-all duration-900 dark:text-gray-200 ${completed && "line-through"}`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => quitarTarea(id)}>
        <IconCross />
      </button>
    </article>
  );
};
export default TodoItem;
