import Pagination from "../Pagination/Pagination";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPage, getCharacters } from "../../slices/characterSlice";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";

const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.character.value);
  const page = useAppSelector((state) => state.character.currentPage);
  // const [allChar, setAllChar] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchPage(page));
  }, [dispatch, page]);

  return (
    <div>
      <SearchBar placeholder="Enter a character..." />
      <Pagination />
      <div className="text-white font-bold grid grid-cols-2 gap-5 w-1/2 text-center m-auto mt-20 rounded">
        {characters.map((character) => (
          <div
            key={character.name}
            className="p-5 rounded border border-yellow-200"
          >
            <Card character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
