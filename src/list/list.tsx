import { ListData } from "./list-data.type";
import styles from "./list.module.scss";

type ListProps = {
  items: ListData[];
  errorCode: string;
};

type ListItemProps = {
  item: ListData;
};

export function List({ items, errorCode }: ListProps) {
  const rows = items.map((item, index) => <ListItem item={item} key={index} />);
  const errorRow = (
    <tr>
      {" "}
      <td colSpan={2}>Failed to fetch data, try again</td>
    </tr>
  );

  return (
    <table id={styles.table}>
      <tbody>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
        </tr>
        {errorCode === "ERR_NETWORK" ? errorRow : rows}
      </tbody>
    </table>
  );
}

function ListItem({ item }: ListItemProps) {
  return (
    <tr>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
    </tr>
  );
}
