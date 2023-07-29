import React from "react";
import { BrowserRouter, Router, Link, Route, Routes } from "react-router-dom";
import { lipicsy } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full fixed flex justify-between items-center bg-[#222328] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <div className="flex justify-center items-center">
            {" "}
            <img src={lipicsy} alt="logo" className="w-28 object-contain" />
            <p className="font-extrabold text-[32px] text-[#e77b32] ">
              LiPicsy
            </p>
          </div>
        </Link>
        {/* <Link
          to="/createPost"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link> */}
      </header>{" "}
      <main className="sm:p-8 px-4 py-8 w-full bg-gradient-to-t from-custom-gradient-1 via-custom-gradient-2 to-custom-gradient-12  h-screen">
        <Routes>
          <Route path="/" element={<CreatePost />} />
          {/* <Route path="/createPost" element={<CreatePost />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
