import { useLocation, useNavigate } from "react-router-dom";
import { CharacterProps } from "../../interface/interfaces";
import Films from "../Films/Films";
import Homeworld from "../Homeworld/Homeworld";
const background = require("../../img/background.jpg");

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const character: CharacterProps = location.state.character;

  return (
    <div className="text-center text-white w-1/4 p-7 child:mb-4 m-auto border-4 rounded-md mt-10">
      <h1 className="mb-4 text-lg font-bold border-y-2 p-4">
        {character.name}
      </h1>
      <p>
        <Homeworld url={character.homeworld} />
      </p>
      <p>
        <b className="mx-2">Gender: </b>
        {character.gender}
      </p>
      <p>
        <b className="mx-2">Height:</b>
        {character.height} cm.
      </p>
      <p>
        <b className="mx-2">Mass:</b>
        {character.mass} kg.
      </p>
      <p>
        <b className="mx-2">Birth Year:</b> {character.birth_year}
      </p>
      <b>Films:</b>
      <ul>
        {character.films.map((url) => (
          <li key={url}>
            <Films url={url} />
          </li>
        ))}
      </ul>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 bg-transparent hover:bg-amber-200 hover:text-black text-amber-500 font-semibold  py-2 px-4 border border-amber-500 hover:border-transparent rounded"
      >
        Back
      </button>
    </div>
  );
};

export default Details;
