import { useContext } from "react";
import { CrudTaskItem } from "./CrudTaskItem";
import CrudContext from "../context/CrudContext";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { Badge, Avatar } from "@nextui-org/react";
import { CompleteTasks } from "./CompleteTaks";

export const CrudTasks = () => {
 
  const { db, todosCount,
    pendingTodosCount } = useContext(CrudContext);
  return (
    <>
      <Accordion selectionMode="multiple">
        <AccordionItem
          key="1"
          aria-label="Chung Miller"
          startContent={
            <Badge content={pendingTodosCount} color="warning">
              <Avatar
                radius="md"
                src="./images/note-icon.svg"
              />
            </Badge>
          }
          subtitle={" Tareas pendientes: " + pendingTodosCount }
          title="Tereas Pendientes"
        >
          <ul>
            {db.map((task) => (
              <CrudTaskItem key={task.id} task={task} />
            ))}
          </ul>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Janelle Lenard"
          startContent={
            <Badge content={todosCount - pendingTodosCount} color="success">
              <Avatar
                radius="md"
                src="./images/note-icon.svg"
              />
            </Badge>
          }
          subtitle={" Tareas completadas: " + (todosCount - pendingTodosCount)}
          title="Tareas Completadas"
        >
           <ul>
            {db.map((task) => (
              <CompleteTasks key={task.id} task={task} />
            ))}
          </ul>
        </AccordionItem>
      </Accordion>

     
    </>
  );
};
