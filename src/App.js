import { Layout } from "./components/Layout/Layout";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from "./components/TsakForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "./redux/operations";
import { useSelector } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.isLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      {loading && <p>Loading.........</p>}
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
