import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { nextPage, previousPage, setPage } from "../../slices/characterSlice";

const Pagination = () => {
  const pages = 9;
  const components = [];
  const currentPage = useAppSelector((state) => state.character.currentPage);
  const dispatch = useAppDispatch();

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
      <div className="inline-block sm:max-md:p-2 sm:max-sm:p-2">
        <button
          onClick={() => changePage("number", i)}
          className={
            currentPage === i
              ? "bg-amber-200 border text-slate-500 rounded mx-2 "
              : "bg-white rounded mx-2"
          }
          disabled={currentPage === i ? true : false}
          style={{ padding: "8px" }}
        >
          {i}
        </button>
      </div>
    );
  }

  return (
    <div className="w-1/2 m-auto text-center mt-10 ">
      <button
        onClick={() => changePage("previous")}
        style={{
          width: "auto",
          color: "white",
          marginRight: "5px",
          letterSpacing: "2px",
          fontWeight: "bold",
        }}
      >
        Previous
      </button>
      {components}
      <button
        onClick={() => changePage("next")}
        style={{
          width: "auto",
          color: "white",
          marginLeft: "5px",
          letterSpacing: "2px",
          fontWeight: "bold",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
