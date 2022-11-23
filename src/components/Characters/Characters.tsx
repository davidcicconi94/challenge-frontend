import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCharacters } from "../../slices/characterSlice";
import Card from "../Card/Card";

const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.character.value);
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div>
      {characters.map((character) => (
        <div key={character.name}>
          <Card character={character} />
        </div>
      ))}
    </div>
  );
};

export default Characters;
