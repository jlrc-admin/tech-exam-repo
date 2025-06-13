import DashboardComponent from "@/components/Dashboard";
export type ListType = "users" | "tutors" | "students";
export default async function Home() {
  let resUser = await fetch("http://192.168.1.16:7878/users", {
    headers: { "Content-Type": "application/json" },
  });
  let resTutors = await fetch("http://192.168.1.16:7878/tutors", {
    headers: { "Content-Type": "application/json" },
  });
  let reStudents = await fetch("http://192.168.1.16:7878/students", {
    headers: { "Content-Type": "application/json" },
  });
  const data = {
    users: await resUser.json(),
    tutors: await resTutors.json(),
    students: await reStudents.json(),
  };
  return (
    <>
      <DashboardComponent data={data} />
    </>
  );
}
