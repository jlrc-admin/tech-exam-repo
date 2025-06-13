import axios from "axios";
import { useEffect, useState } from "react";
import { List } from "../list/list";
import { ListData } from "../list/list-data.type";

type UserListProps = {
  listApi: string;
};

export function UsersList({ listApi }: UserListProps) {
  let data: ListData[] = [];
  let errorCode = "";
  type stateType = { data: ListData[]; errorCode: string };
  const [state, setState] = useState<stateType>({
    data: [],
    errorCode: "",
  });

  useEffect(() => {
    return () => {
      axios
        .get(listApi)
        .then((result) => {
          data = result.data;
        })
        .catch((axiosError) => {
          errorCode = axiosError.code;
        })
        .finally(() => {
          setState({
            data: data,
            errorCode: errorCode,
          });
        });
    };
  }, []);

  return (
    <div>
      <List items={state.data} errorCode={state.errorCode} />;
    </div>
  );
}
