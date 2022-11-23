import { Link } from "react-router-dom";
import { CharacterProps } from "../../interface/interfaces";

const Card = ({ character }: { character: CharacterProps }) => {
  const { name } = character;
  const finalName = name.replace(/ /g, "").toLowerCase();
  console.log(name);
  return (
    <div>
      <Link
        state={{ character: character }}
        to={{ pathname: `${finalName}/details` }}
      >
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default Card;
