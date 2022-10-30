import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { getStatusFilter } from "redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "redux/actions";
import { statusFilters } from "redux/constants";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter)
  const handleFilterChenge = filter => dispatch(setStatusFilter(filter))
  
  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}
        onClick={() => handleFilterChenge(statusFilters.all)}
      >All
      </Button>
      <Button selected={filter === statusFilters.active}
        onClick={() => handleFilterChenge(statusFilters.active)}
      >Active
      </Button>
      <Button selected={filter === statusFilters.completed}
        onClick={() => handleFilterChenge(statusFilters.completed)}
      >Completed
      </Button>
    </div>
  );
};
