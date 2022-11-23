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
      {characters.map(({ name }) => (
        <div key={name}>
          <Card name={name} />
        </div>
      ))}
    </div>
  );
};

export default Characters;
