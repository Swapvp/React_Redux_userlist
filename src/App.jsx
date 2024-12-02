import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { userDelete } from "./store/reducers/userReducer";

function App() {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    // console.log(index);
    dispatch(userDelete(index));
  };

  return (
    <div className="bg-red-100 container mx-auto p-4">
      <h2 className="font-bold ">User List</h2>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={user.id} className="my-3">
              {user.name}
              <span
                onClick={() => deleteHandler(index)}
                className="font-bold p-1 rounded-full my-2 mx-2 px-1 py-1 text-red-500 cursor-pointer"
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
