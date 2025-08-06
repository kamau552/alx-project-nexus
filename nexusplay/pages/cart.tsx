import React from 'react';
import Searchbar from  "@/components/common/searchbar";


export default function Cart() {
  return (
    <div>
      <Searchbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <p>All your categories listed here</p>
      </div>
    </div>
  );
}