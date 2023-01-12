import { useDispatch, useSelector } from 'react-redux';
 import { updateFilter } from '../../redux/slices';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.textUtilities.filter);
  
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="name"
        value={filter}
        onChange={(ev) => dispatch(updateFilter(ev.target.value))}
      />
    </label>
  );
};

export default Filter;
