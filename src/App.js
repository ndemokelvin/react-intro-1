import { UsersList } from "./components";
import students from "./data";

function App() {
  return (
    <div className="App">
      <UsersList students={students} />
    </div>
  );
}

export default App;

// 1. Users list displayed, Form to create a new users.
// 2. Once somebody fills the new user form, we want to show the user on the display list.
