import React from "react";

export default function SIgnup() {
  return (
    <>
    <div className="flex flex-col gap-3 justify-center items-center  ">
      <h1 className="text text-center text-2xl font-bold">SignUP</h1>
      <form
        action="/register"
        method="post"
        className="flex flex-col gap-3 justify-center bg-slate-900 p-4 rounded-lg  "
      >
        <input
          className="bg bg-transparent text-white  rounded border-2 p-3 px-4  outline-none"
          type="text"
          placeholder="Name" required
        />
        <input
          className="bg bg-transparent outline-none text-white rounded border-2 p-3 px-4"
          type="email"
          placeholder="email" required
        />
        <input
          className="bg bg-transparent outline-none text-white rounded border-2 p-3 px-4"
          type="password"
          placeholder="Password" required
        />
        <input
          className="bg bg-transparent outline-none text-white rounded border-2 py-3 px-4"
          type="password"
          placeholder="Confrim Passowrd" required
        />
        <input
          className="bg bg bg-blue-700 outline-none text-white rounded border-2 py-3 px-4"
          type="submit"
          placeholder="Confrim Passowrd" required
        />
      </form>
      </div>
    </>
  );
}
