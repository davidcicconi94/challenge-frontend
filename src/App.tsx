import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getCharacters } from "./slices/characterSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const character = useAppSelector((state) => state.character);
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-3xl font-bold underline">Star wars</h2>
    </div>
  );
};

export default App;
