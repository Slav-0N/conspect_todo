import { createAction } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// export const addTask = createAction("task/addTask", (text) => ({
//   payload: {
//     id: nanoid(),
//     completed: false,
//     text,
//   },
// }));
// export const deleteTask = createAction("tasks/deleteTask");
// export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter");
