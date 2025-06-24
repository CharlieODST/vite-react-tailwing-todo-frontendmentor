const TodoFilter = ({ cambiarFiltro, filtro }) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-900 dark:bg-gray-800">
        <button
          className={`${
            filtro === "all"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => cambiarFiltro("all")}
        >
          All
        </button>
        <button
          className={`${
            filtro === "active"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => cambiarFiltro("active")}
        >
          Active
        </button>
        <button
          className={`${
            filtro === "completed"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => cambiarFiltro("completed")}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
