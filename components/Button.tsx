import { ListType } from "@/app/page";
import { MouseEventHandler, useState } from "react";

type ButtonComponentProps = {
  label: ListType;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSelected: boolean;
};
export default function ButtonComponent({
  label,
  onClick,
  isSelected,
}: ButtonComponentProps) {
  return (
    <button
      onClick={onClick}
      className={`text-white px-4 py-2 rounded-lg cursor-pointer  hover:bg-purple-800 transition duration-100 uppercase ${
        isSelected ? "bg-purple-900" : "bg-purple-600"
      }`}
    >
      {label}
    </button>
  );
}
