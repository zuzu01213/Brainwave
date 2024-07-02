import { loading } from "../../assets/index.js";
import React from "react";
import "../css/loading.css"; // File CSS yang berisi animasi keyframes

export const Generating = ({ className }) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 text-base bg-n-8/80 rounded-[1.7rem] ${className || ''}`}>
      <img
        className="loading-spinner w-5 h-5 mr-4"  // Kelas loading-spinner untuk gaya dan ukuran gambar
        src={loading}
        alt="loading"
      />
      AI is generating
    </div>
  );
};


