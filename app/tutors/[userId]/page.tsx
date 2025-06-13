import NavBarComponent from "@/components/NavBar";
import Link from "next/link";

export default async function Tutor({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const resUser = await fetch(`http://192.168.1.16:7878/tutors/${userId}`, {
    headers: { "Content-Type": "application/json" },
  });
  const { user, id: tutorId, ...variable } = await resUser.json();
  const data = { ...variable, ...user };

  const resStudents = await fetch(
    `http://192.168.1.16:7878/tutors/${tutorId}/students`,
    { headers: { "Content-Type": "application/json" } }
  );
  //   const { studentUser, ...studentVariable } = await resStudents.json();
  //   const studentsData = { ...studentVariable, ...studentUser };
  const studentsData = await resStudents.json();
  const students = studentsData.map((student: any) => {
    const { user, id: studentId, ...variable } = student;
    return { ...variable, ...user };
  });
  return (
    <div className="">
      <NavBarComponent>
        <Link href="/" className="font-bold uppercase">
          Daryl Thomas
        </Link>
      </NavBarComponent>
      <div className="w-8/12 mx-auto space-y-4 p-4 mt-2 shadow-md rounded-lg">
        <div className="space-y-4   ">
          <div className="font-bold text-lg uppercase">Tutor</div>
          {Object.keys(data).map((key) => (
            <div key={key} className="grid grid-cols-[150px_1fr]">
              <div className="capitalize">{key}:</div>
              <div>{data[key]}</div>
            </div>
          ))}
          <div className="font-bold text-lg uppercase">STUDENTS</div>
          {students.map((student: any) => (
            <div key={student.id}>
              <div className="font-bold text-lg uppercase">{student.name}</div>
              {Object.keys(student).map((key) => (
                <div key={key} className="grid grid-cols-[150px_1fr]">
                  <div className="capitalize">{key}:</div>
                  <div>{student[key]}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
