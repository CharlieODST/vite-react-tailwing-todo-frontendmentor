import { useState } from "react";

const TodoCreate = ({ crearTarea }) => {
  const [title, setTitle] = useState("");

  const handleSubmitTarea = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle(""); // Prevent creating empty tasks
    }
    crearTarea(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmitTarea}
      className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-900 dark:bg-gray-800"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-300 transition-all duration-900 dark:border-gray-600"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-gray-400 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};
export default TodoCreate;
