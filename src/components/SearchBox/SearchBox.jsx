import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);

  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="search">
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={s.input}
        />
      </label>
    </div>
  );
};
export default SearchBox;
