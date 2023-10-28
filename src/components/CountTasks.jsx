import { useContext } from "react";
import CrudContext from "../context/CrudContext";

export const CountTasks = () => {
  const { todosCount, pendingTodosCount } = useContext(CrudContext);

  return (
    <div className="m-4 p-4 flex justify-around items-center gap-6 border-1 border-solid border-white rounded-md">
      <div>
        <p className="font-bold text-3xl">Progreso</p>
        <p>Logra completar tus tareas.</p>
      </div>
      <div className="bg-zinc-700 p-4 rounded-full w-24 h-24 flex justify-center items-center relative">
        <p className="font-semibold text-4xl">
          {pendingTodosCount}<span className="font-thin">/</span><span className="font-semibold text-amber-500 text-4xl">{todosCount}</span>
        </p>
      </div>
    </div>
  );
};
