import React from "react";

const Header = () => {
  return (
    <div className="bg-white p-5">
      <div className="flex justify-between items-center w-[95%] mx-auto">
        <div>Header</div>
        <div className="flex gap-2 items-center">
          <img
            className="w-10 h-10 rounded-full cursor-pointer ring-1 ring-blue ring-offset-2"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="UserProfile"
          />
          <span>Abdulqadir</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
