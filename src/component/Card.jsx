import React from 'react';
import "../css/base.css";
import { useNavigate } from 'react-router-dom';

const Card = ({ img, title, descrption, buttonText, url }) => {
  const navigate = useNavigate();
  const btnHandler = () => navigate(url);

  return (
    <div className="w-[90%] max-w-[720px] bg-white rounded-2xl shadow-md mx-auto pb-10 p-5 mt-5">

      <img
        src={img}
        alt=""
        className="w-full aspect-[16/9] object-cover rounded-xl"
      />

      <p className="text-xl font-semibold mt-5 text-center">
        {title}
      </p>

      <p className="text-sm text-gray-600 mt-2 text-center leading-relaxed">
        {descrption}
      </p>

      <div className="flex justify-center mt-2">
        <button
          onClick={btnHandler}
          className="bg-[#39E079] text-white px-6 py-3 w-4/5 rounded-xl text-sm font-medium hover:bg-[#2dc56e] transition"
        >
          {buttonText}
        </button>
      </div>

    </div>
  );
};

export default Card;
