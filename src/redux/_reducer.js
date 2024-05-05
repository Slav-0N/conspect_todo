import { statusFilters } from "./constants";
import {
  // addTask,
  // deleteTask,
  // toggleCompleted,
  setStatusFilter,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

// const tasksInitialState = [
//   { id: 0, text: "Learn HTML and CSS", completed: true },
//   { id: 1, text: "Get good at JavaScript", completed: true },
//   { id: 2, text: "Master React", completed: false },
//   { id: 3, text: "Discover Redux", completed: false },
//   { id: 4, text: "Build amazing apps", completed: false },
// ];

const filtersInitialState = {
  status: statusFilters.all,
};
// export const tasksReducer = createReducer(tasksInitialState, (builder) =>
//   builder
//     .addCase(addTask, (state, action) => {
//       state.push(action.payload);
//     })
//     .addCase(deleteTask, (state, action) => {
//       return state.filter((task) => task.id !== action.payload);
//     })
//     .addCase(toggleCompleted, (state, action) => {
//       for (const task of state) {
//         if (task.id === action.payload) {
//           task.completed = !task.completed;
//         }
//       }
//     })
// );

export const filtersReducer = createReducer(filtersInitialState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => {
    state.status = action.payload;
  });
});

// export const filtersReducer = (state = filtersInitialState, action) => state;
