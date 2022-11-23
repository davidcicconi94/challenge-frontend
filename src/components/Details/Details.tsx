import { useLocation } from "react-router-dom";
import { CharacterProps } from "../../interface/interfaces";

const Details = () => {
  const location = useLocation();
  const character: CharacterProps = location.state.character;
  console.log(character);
  return (
    <div className="card">
      <h1> {character.name} </h1>
      <p> Homeworld: {character.homeworld} </p>
    </div>
  );
};

export default Details;
