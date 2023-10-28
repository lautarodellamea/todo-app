import { useContext, useEffect, useState } from "react";
import CrudContext from "../context/CrudContext";

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const initialForm = {
  id: null,
  title: "",
  done: false,
};

export const CrudForm = () => {
  const {
    dataToEdit,
    createData,
    updateData,
    setDataToEdit,
    todosCount,
    pendingTodosCount,
  } = useContext(CrudContext);
  const [form, setForm] = useState(initialForm);
  const [inputError, setInputError] = useState(false)

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || form.title.trim().length === 0) {
      // alert("Datos incompletos");
      setInputError(true)
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
    setInputError(false)
  };

  return (
    <div className="p-4">
      <h3 className="text-2xl mb-4">{dataToEdit ? "Editar Tarea" : "Agregar Tarea"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row w-full  gap-1 ">
          <Input
            onChange={handleChange}
            type="text"
            name="title"
            value={form.title}
            placeholder="Introduzca una tarea"
            isInvalid={inputError}
            errorMessage={inputError ? "Por favor introduzca una tarea" : "" }
          />
          <Button type="submit" color="warning">
            Enviar
          </Button>
          <Button onClick={handleReset} type="reset" value="Limpiar" color="default">
            Limpiar
          </Button>
        </div>
      </form>
    </div>
  );
};
