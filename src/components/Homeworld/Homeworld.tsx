import axios from "axios";
import React, { useEffect, useState } from "react";

const Homeworld = ({ url }: { url: string }) => {
  const [homeworld, setHomeworld] = useState<string>("");
  useEffect(() => {
    async function getApi(url: string) {
      try {
        const { data } = await axios.get(url);
        setHomeworld(data.name);
      } catch (error) {
        return <> Error: {error} </>;
      }
    }
    getApi(url);
  }, [url]);

  return <div> Homeworld: {homeworld} </div>;
};

export default Homeworld;
