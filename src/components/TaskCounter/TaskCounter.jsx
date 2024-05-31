import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { selectTaskCount } from "../../redux/selectors";

export const TaskCounter = () => {
  const counter = useSelector(selectTaskCount);
  return (
    <div>
      <p className={css.text}>Active: {counter.active}</p>
      <p className={css.text}>Completed: {counter.completed}</p>
    </div>
  );
};
