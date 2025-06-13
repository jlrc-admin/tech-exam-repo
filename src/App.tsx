import { useContext } from "react";
import { initializeAxios } from "./app-config";
import "./App.css";
import { ListContext, ListContextProvider } from "./list/list-context";
import { Navigation } from "./navigation/navigation";
import { UsersList } from "./users-list/users-list";

function App() {
  initializeAxios();
  const { listApi } = useContext(ListContext);

  return (
    <div>
      <ListContextProvider>
        <Navigation />
        <UsersList listApi={listApi} />
      </ListContextProvider>
    </div>
  );
}

export default App;
