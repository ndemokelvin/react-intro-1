import React, { useState } from "react";

const UserForm = ({ onAddNewStudent }) => {
  //array destructuring.

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmitUser = () => {
    /// update users/students on the user list component
    onAddNewStudent({
      firstName,
      secondName,
    });
    setFirstName("");
    setSecondName("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitUser();
      }}
      className="flex flex-col"
    >
      <input
        placeholder="First Name"
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
        className="mb-5 border focus:outline-none rounded px-1 text-sm py-1"
      />
      <input
        placeholder="Last Name"
        value={secondName}
        onChange={(event) => {
          setSecondName(event.target.value);
        }}
        className="border focus:outline-none rounded px-1 text-sm py-1"
      />
      <button
        type="submit"
        className="mt-5 bg-blue-600 text-white text-sm px-1 py-1"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
