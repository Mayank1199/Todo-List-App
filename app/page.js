"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([
      ...mainTask,
      {
        title,
        desc,
      },
    ]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-center">
          <div className="flex justify-between items-center m-4 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="bg-red-400 text-white px-4 py-2 text-lg rounded"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <div className="text-center">
      <h1 className="bg-black text-white text-center p-5 text-4xl font-bold">
        Todo List App
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-4 m-10 px-4 py-2 border-zinc-800 rounded"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-4 m-5 px-4 py-2 border-zinc-800 rounded"
          placeholder="Enter  Description Here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 m-10 text-2xl font-bold rounded">
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul className="font-bold text-2xl">{renderTask}</ul>
      </div>
    </div>
  );
};

export default page;
