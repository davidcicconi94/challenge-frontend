import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { nextPage, previousPage, setPage } from "../../slices/characterSlice";

const Pagination = () => {
  const pages = 9;
  const components = [];
  const currentPage = useAppSelector((state) => state.character.currentPage);
  const dispatch = useAppDispatch();

  function usePrevious(value: any) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  function changePage(type: any, number?: any) {
    switch (type) {
      case "next":
        if (currentPage < 9) dispatch(nextPage());
        break;
      case "previous":
        if (currentPage > 1) dispatch(previousPage());
        break;
      default:
        dispatch(setPage(number));
        break;
    }
  }

  for (let i = 1; i <= pages; i++) {
    components.push(
      <button
        onClick={() => changePage("number", i)}
        className={currentPage === i ? "bg-red-800" : "bg-white"}
        disabled={currentPage === i ? true : false}
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      <button
        onClick={() => changePage("previous")}
        style={{ width: "auto", color: "white" }}
      >
        Previous
      </button>
      {components}
      <button
        onClick={() => changePage("next")}
        style={{ width: "auto", color: "white" }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
