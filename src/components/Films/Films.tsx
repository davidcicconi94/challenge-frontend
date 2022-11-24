import React, { useEffect, useState } from "react";
import axios from "axios";

const Films = ({ url }: { url: string }) => {
  const [filmTitle, setFilmTitle] = useState<string>("");
  const [director, setDirector] = useState<string>("");

  useEffect(() => {
    async function getApi(url: string) {
      try {
        const { data } = await axios.get(url);
        setFilmTitle(data.title);
        setDirector(data.director);
      } catch (err) {
        return err;
      }
    }
    getApi(url);
  }, [url]);

  return (
    <div>
      {filmTitle} (Director: {director})
    </div>
  );
};

export default Films;
