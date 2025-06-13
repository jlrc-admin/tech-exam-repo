"use client";

import { useState } from "react";
import ButtonComponent from "./Button";
import ListComponent from "./List";
import { ListType } from "@/app/page";
import NavBarComponent from "./NavBar";

type DashboardComponentProps = {
  data: any;
};

export default function DashboardComponent({ data }: DashboardComponentProps) {
  const [selectedList, setSelectedList] = useState<ListType>("users");
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <NavBarComponent>
        <div className="font-bold uppercase">Daryl Thomas</div>
        <input
          className="bg-white shadow-md text-black text-xs p-2 rounded-md border border-purple-300 w-100 focus:outline-purple-700"
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to filter by Users, Tutors, and Students..."
        />
      </NavBarComponent>
      <div className="bg-gray-50 min-h-screen p-4">
        <div className="w-8/12 mx-auto space-y-4">
          <div className="space-x-4">
            <ButtonComponent
              onClick={() => setSelectedList("users")}
              label="users"
              isSelected={selectedList == "users"}
            />
            <ButtonComponent
              onClick={() => setSelectedList("tutors")}
              label="tutors"
              isSelected={selectedList == "tutors"}
            />
            <ButtonComponent
              onClick={() => setSelectedList("students")}
              label="students"
              isSelected={selectedList == "students"}
            />
          </div>
          <ListComponent
            searchQuery={search}
            selectedList={selectedList}
            listData={data[selectedList]}
          />
        </div>
      </div>
    </>
  );
}
