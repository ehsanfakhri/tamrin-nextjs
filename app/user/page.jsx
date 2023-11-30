"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchUserList();
  }, [currentPage]);

  const fetchUserList = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`,
        { next: { revalidate: 5 } }
      );
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.log("Error fetching user list:", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4 p-6">User List</h1>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {users.map((user) => (
          <Link href={`/user/${user.id}`}>
            <div key={user.id} className="border rounded p-4">
              <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
              <img
                className="w-full h-auto mb-2 rounded"
                src={user.image}
                alt={user.name}
              />
              <p className="text-sm text-gray-600">{user.species}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Back
        </button>
        <p className="text-gray-100">Page {currentPage}</p>
        <button
          className="bg-blue-500 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded"
          onClick={handleNextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default UserList;
