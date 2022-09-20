import React, { useState } from "react";
import UsersForm from "../UserForm";
import students from "../../data";

const UsersList = () => {
  const [stateStudents, setStateStudents] = useState(students);

  const onAddNewStudent = (student) => {
    setStateStudents([...stateStudents, student]);
  };

  return (
    <div className="px-32 py-10 w-full flex">
      <div className="w-1/2 grid gap-3 grid-cols-3">
        {stateStudents.map((student) => (
          <div
            className="border border-gray-500 rounded px-5"
            key={student.firstName + student.secondName}
          >
            <p>{student.firstName}</p> {student.secondName}
          </div>
        ))}
      </div>
      <div className="w-1/4 ml-10">
        <UsersForm onAddNewStudent={onAddNewStudent} />
      </div>
    </div>
  );
};

export default UsersList;
