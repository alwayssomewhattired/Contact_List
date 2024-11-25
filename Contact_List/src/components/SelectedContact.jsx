import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CR from "./CR";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(1);
  console.log(contact);

  useEffect(() => {
    async function singleContacts() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    singleContacts();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3}>Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Username</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Website</td>
        </tr>
        <CR contact={contact} setSelectedContactId={setSelectedContactId} />
      </tbody>
    </table>
  );
}
