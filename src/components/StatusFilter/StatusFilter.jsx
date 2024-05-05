import { Button } from "../Button/Button";
// import css from "./StatusFilter.module.css";
import { setStatusFilter } from "../../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  const handleStatusFilter = (filt) => dispatch(setStatusFilter(filt));

  return (
    <div>
      <Button
        selected={statusFilters.all === filter}
        onClick={() => handleStatusFilter(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={statusFilters.active === filter}
        onClick={() => handleStatusFilter(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={statusFilters.completed === filter}
        onClick={() => handleStatusFilter(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
