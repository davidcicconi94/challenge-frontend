import { useLocation } from "react-router-dom";
import { CharacterProps } from "../../interface/interfaces";
import Films from "../Films/Films";
import Homeworld from "../Homeworld/Homeworld";

const Details = () => {
  const location = useLocation();
  const character: CharacterProps = location.state.character;

  return (
    <div className="card">
      <h1> {character.name} </h1>
      <p>
        <Homeworld url={character.homeworld} />
      </p>
      <p>Gender: {character.gender} </p>
      <p>Height: {character.height} cm. </p>
      <p>Mass: {character.mass} kg. </p>
      <p>Birth Year: {character.birth_year} </p>
      Films:
      <ul>
        {character.films.map((url) => (
          <li key={url}>
            <Films url={url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
