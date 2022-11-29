import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getByName } from "../../slices/characterSlice";

const SearchBar = ({ placeholder }: any) => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  };

  useEffect(() => {
    dispatch(getByName(search));
  }, [dispatch, search]);

  return (
    <div>
      <div className="relative w-1/2 m-auto mt-10">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-gray-500"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
