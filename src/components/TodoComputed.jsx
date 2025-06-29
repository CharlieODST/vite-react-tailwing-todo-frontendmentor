const TodoComputed = ({ numeroTareas, limpiarTareas }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white px-4 py-4 transition-all duration-900 dark:bg-gray-800">
      <span className="text-gray-400 dark:text-gray-400">
        {numeroTareas} items left
      </span>
      <button
        className="text-gray-400 dark:text-gray-400"
        onClick={limpiarTareas}
      >
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
