import { useContext } from "react";
import styles from "./navigation.module.scss";
import { ListContext } from "../list/list-context";
import { api } from "../app-config";

const fullName = process.env.REACT_APP_fullname;

export function Navigation() {
  const { listApi, setListApi } = useContext(ListContext);
  return (
    <div id={styles.nav}>
      <span>{fullName}</span>
      <input type="text" />
      <div>
        <button
          onClick={() => {
            console.log(api.users);
            setListApi(api.users);
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            console.log(api.tutors);
            setListApi(api.tutors);
          }}
        >
          Tutors
        </button>
        <button
          onClick={() => {
            console.log(api.students);
            setListApi(api.students);
          }}
        >
          Students
        </button>
      </div>
    </div>
  );
}
