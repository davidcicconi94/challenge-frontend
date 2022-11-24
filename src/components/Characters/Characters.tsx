import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCharacters } from "../../slices/characterSlice";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";

const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.character.value);
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const characterName = characters.map((char) => char.name);
  console.log(characterName);

  return (
    <div>
      <SearchBar placeholder="Enter a character..." data={characterName} />
      <div className="grid grid-cols-2 gap-5 w-1/2 text-center m-auto mt-20">
        {characters.map((character) => (
          <div
            key={character.name}
            className="p-5"
            style={{ border: "1px solid red" }}
          >
            <Card character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
