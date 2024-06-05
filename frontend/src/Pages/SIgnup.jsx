import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SIgnup() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confpassword, setconfPassword] = useState();

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
			const url = "http://localhost:3000/signup";
			const {  data } = await axios.post(url, {name,email,password,confpassword});
			console.log(res.message);
      console.log(data)
			navigate("/login");
		} catch (error) {
			// if (
			// 	error.response &&
			// 	error.response.status >= 400 &&
			// 	error.response.status <= 500
			// ) {
				setError(error.response.data.message);
			}

  };

  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center  ">
        <h1 className="text text-center text-2xl font-bold">SignUP</h1>
        <form
          // action="/register"
          onSubmit={handleSubmit}
          // method="post"
          className="flex flex-col gap-3 justify-center bg-slate-900 p-4 rounded-lg  "
        >
          <input
            className="bg bg-transparent text-white  rounded border-2 p-3 px-4  outline-none"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="bg bg-transparent outline-none text-white rounded border-2 p-3 px-4"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
          <input
            className="bg bg-transparent outline-none text-white rounded border-2 p-3 px-4"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input
            className="bg bg-transparent outline-none text-white rounded border-2 py-3 px-4"
            type="password"
            onChange={(e) => setconfPassword(e.target.value)}
            placeholder="Confrim Passowrd"
            required
          />
          {/* <input
            className="bg bg bg-blue-700 outline-none text-white rounded border-2 py-3 px-4 cursor-pointer"
            type="submit"
            placeholder="Confrim Passowrd"
            required
          /> */}
          <button className="bg bg bg-blue-700 outline-none text-white rounded border-2 py-3 px-4 cursor-pointer"
 type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
