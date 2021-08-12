import { useDispatch } from "react-redux";
import { setDoneTrue, setDoneFalse, deleteItem } from "../redux/todoSlice";
import { AiTwotoneDelete } from "react-icons/ai";

const TodoList = ({ id, name, done }) => {
  const dispatch = useDispatch();
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      dispatch(setDoneTrue({ id }));
    } else {
      dispatch(setDoneFalse({ id }));
    }
  };
  return (
    <>
      <section className="bounceInLeft">
        <input type="checkbox" onChange={handleCheckbox} />
        <p className={done ? "done" : null}>{!name ? "***empty*** " : name}</p>
        <div onClick={() => dispatch(deleteItem({ id }))}>
          <AiTwotoneDelete className="delete-btn" />
        </div>
      </section>
    </>
  );
};

export default TodoList;
