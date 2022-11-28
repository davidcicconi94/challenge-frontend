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
        className={currentPage === i ? "bg-amber-200" : "bg-white"}
        disabled={currentPage === i ? true : false}
        style={{ padding: "7px" }}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="w-1/2 m-auto  text-center mt-10">
      <button
        onClick={() => changePage("previous")}
        style={{ width: "auto", color: "white", marginRight: "5px" }}
      >
        Previous
      </button>
      {components}
      <button
        onClick={() => changePage("next")}
        style={{ width: "auto", color: "white", marginLeft: "5px" }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
