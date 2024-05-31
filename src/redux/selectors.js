import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectTasks = (state) => state.tasks.items;

export const selectFilter = (state) => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    console.log("Calculating VisibleTasks count");

    switch (filter) {
      case statusFilters.active:
        return tasks.filter((task) => task.completed === false);
      case statusFilters.completed:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  console.log("Calculating task count");
  return tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
});
