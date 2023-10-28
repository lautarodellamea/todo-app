import { ToDoApp } from "./components/TodoApp";
import { Footer } from "./components/Footer";
import { CrudProvider } from "./context/CrudContext";

export const App = () => {
  return (
    <CrudProvider>
      <ToDoApp />
      <Footer/>
    </CrudProvider>
  );
};
