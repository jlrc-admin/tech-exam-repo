import React, { createContext, useState } from "react";
import { api } from "../app-config";

type ListContextType = {
  listApi: string;
  setListApi: any;
};
export const ListContext = createContext<ListContextType>({
  listApi: api.users,
  setListApi: () => {},
});
export const ListContextProvider = (props: React.PropsWithChildren) => {
  const [listApi, setListApi] = useState(api.users);
  return (
    <ListContext.Provider value={{ listApi, setListApi }}>
      {props.children}
    </ListContext.Provider>
  );
};
