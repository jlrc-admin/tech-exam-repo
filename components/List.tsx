import { ListType } from "@/app/page";
import Link from "next/link";
import { useEffect, useState } from "react";

type ListComponentProps = {
  selectedList: ListType;
  listData: any;
  searchQuery: string;
};
export default function ListComponent({
  selectedList,
  listData,
  searchQuery,
}: ListComponentProps) {
  const [filteredData, setFilteredData] = useState(listData);
  useEffect(() => {
    const newListData = listData.filter((item: any) => {
      return (
        item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredData(newListData);
  }, [selectedList, searchQuery]);
  return (
    <table className="w-full shadow-md rounded-lg">
      <thead className="text-left">
        <tr className="bg-purple-200">
          <th className="p-4 border-b border-purple-600">First Name</th>
          <th className="p-4 border-b border-purple-600">Last Name</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item: any) => (
          <tr key={item.id} className="hover:bg-purple-50 cursor-pointer">
            <td className="p-4 border-b border-purple-600">
              <Link href={{ pathname: `/${selectedList}/${item.id}` }}>
                {item.firstName}
              </Link>
            </td>
            <td className="p-4 border-b border-purple-600">
              <Link href={{ pathname: `/${selectedList}/${item.id}` }}>
                {item.lastName}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
