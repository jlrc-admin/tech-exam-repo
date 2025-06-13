import NavBarComponent from "@/components/NavBar";
import Link from "next/link";

export default async function User({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const resUser = await fetch(`http://192.168.1.16:7878/users/${userId}`, {
    headers: { "Content-Type": "application/json" },
  });
  const data = await resUser.json();
  console.log(data);
  return (
    <div className="">
      <NavBarComponent>
        <Link href="/" className="font-bold uppercase">
          Daryl Thomas
        </Link>
      </NavBarComponent>
      <div className="w-8/12 mx-auto space-y-4 p-4 mt-2 shadow-md rounded-lg">
        <div className="space-y-4   ">
          <div className="font-bold text-lg uppercase">User</div>
          {Object.keys(data).map((key) => (
            <div key={key} className="grid grid-cols-[150px_1fr]">
              <div className="capitalize">{key}:</div>
              <div>{data[key]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
