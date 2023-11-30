"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function UserDetailsPage({ params }) {
  const userId = params.id;
  console.log(userId);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${userId}`
      );
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("Error fetching user details:", error);
    }
  };

  if (!user) {
    return <p className="p-4">Loading user details...</p>;
  }

  return (
    <div className=" flex flex-col ">
      <h1 className="text-2xl font-bold mb-4 ">User Details</h1>
      <div className="border rounded p-4 ">
        <h3 className="text-lg mb-2 ">{user.name}</h3>
        <Image
          className=" mb-2 rounded"
          width={300}
          height={300}
          src={user.image}
          alt={user.name}
        />

        <p className="text-sm text-gray-600">{user.species}</p>
      </div>
    </div>
  );
}

export default UserDetailsPage;
