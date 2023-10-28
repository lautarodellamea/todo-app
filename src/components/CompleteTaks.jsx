import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import { Button } from "@nextui-org/react";

export const CompleteTasks = ({ task }) => {
  const { deleteData, setDataToEdit, completeData } = useContext(CrudContext);

  let { id, title, done } = task;
  if (done) {
    return (
      <li className="flex justify-between p-1 gap-2">
        <p>{title}</p>
        <div className="flex gap-2">
          <Button onClick={() => setDataToEdit(task)} size="sm">
            Edit
          </Button>
          <Button onClick={() => completeData(id)} size="sm" color="primary">
            Descompletar
          </Button>
          <Button onClick={() => deleteData(id)} size="sm" color="danger">
            Borrar
          </Button>
        </div>
      </li>
    );
  } else {
    return null; // Opcionalmente, puedes retornar null si no hay nada que renderizar cuando done es true.
  }
};
