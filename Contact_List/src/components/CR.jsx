import React, { useState } from "react";

export default function CR({ setSelectedContactId, contact }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.username}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.website}</td>
    </tr>
  );
}
