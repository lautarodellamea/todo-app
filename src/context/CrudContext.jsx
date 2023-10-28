import { createContext, useEffect, useState } from "react";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const initialDb = [
    /* {
      id: 1,
      title: "Tarea 1",
      done: false,
    }, */
    
  ];

  const storedData = localStorage.getItem("todos");
  const parsedData = storedData ? JSON.parse(storedData) : initialDb;

  const [db, setDb] = useState(parsedData);

  // const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(db));
  }, [db]);

  const createData = (data) => {
    data.id = Date.now();
    setDb([data, ...db]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    // let isDelete = window.confirm(
    //   `Estas seguro de eliminar el registro con el id ${id}`
    // );

    // if (isDelete) {
    //   let newData = db.filter((el) => el.id !== id);
    //   setDb(newData);
    // } else {
    //   return;
    // }

    let newData = db.filter((el) => el.id !== id);
    setDb(newData);
  };

  const completeData = (id) => {
    let newData = db.map((el) =>
      el.id === id ? { ...el, done: !el.done } : el
    );
    setDb(newData);
  };

  const data = {
    db,
    setDb,
    createData,
    deleteData,
    completeData,
    updateData,
    dataToEdit,
    setDataToEdit,
    todosCount: db.length,
    pendingTodosCount: db.filter((todo) => !todo.done).length,
  };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };

export default CrudContext;
