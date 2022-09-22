import React, { Fragment, useEffect, useState } from "react";
import UsersForm from "../UserForm";
import students from "../../data";

const UsersList = () => {
  // rules of using hooks
  const [stateStudents, setStateStudents] = useState(students);
  const [firstName, setFirstName] = useState();
  const [countSquared, setCountSquared] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cSquared = count * count;
    setCountSquared(cSquared);
  }, [count, firstName]);

  const onAddNewStudent = (student) => {
    setStateStudents([...stateStudents, student]);
  };

  // Rules:
  // 1. Don't call without providing the second arguement(array - dependancy array)
  // 2. If you don't have anything,to add in the array, just pass an empty array. This becomes ComponentDidMount
  // 3. Anything you pass to the array, if it changes, the useEffect is called and your component is re-rendered.

  return (
    <Fragment>
      <p className="text-3xl font-bold">
        Count:{count}, Count Squared: {countSquared}
      </p>
      <button
        className="bg-red-500 text-white rounded px-2 py-1"
        onClick={() => setCount(count + 1)}
      >
        Change Count
      </button>
      <div className="px-32 py-10 w-full flex">
        <div className="w-1/2 grid gap-3 grid-cols-3">
          {stateStudents.map((student) => (
            <div
              className="border border-gray-500 rounded px-5"
              key={student.firstName + student.secondName}
            >
              <p>
                {student.firstName} {student.secondName}
              </p>
            </div>
          ))}
        </div>
        <div className="w-1/4 ml-10">
          <UsersForm onAddNewStudent={onAddNewStudent} />
        </div>
      </div>
    </Fragment>
  );
};

export default UsersList;
