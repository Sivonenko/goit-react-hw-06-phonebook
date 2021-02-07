import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';
import * as contactsActions from '../../redux/contacts-actions';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filter__wrap}>
      <h2 className={s.filtter_title}>Contacts</h2>
      <p className={s.filter__caption}>Find contacts by name</p>
      <input
        className={s.filter_input}
        type="text"
        name="filter"
        value={value}
        onChange={event =>
          dispatch(contactsActions.changeFilter(event.target.value))
        }
        placeholder="Enter name for Search"
      />
    </div>
  );
};

export default Filter;
