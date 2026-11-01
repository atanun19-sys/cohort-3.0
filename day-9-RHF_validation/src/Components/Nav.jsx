import React from "react";

const Nav = ({ setToggle }) => {
  return (
    <div className="flex justify-between p-6 bg-black items-center rounded ">
      <div>
        <img
          className="w-14 h-14 rounded rounded-full object-cover"
          src="https://scontent.frdp2-1.fna.fbcdn.net/v/t51.82787-15/731338952_17895495120509876_2542323840691912691_n.webp?stp=dst-jpg_tt6&cstp=mx1440x1919&ctp=s1440x1919&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dCTB9DoEoWQQ7kNvwEgN_gB&_nc_oc=AdrBgJ1RGXUDUqMV40BB86EwKw2bedRhsPezR9d1ZAyOAW7MiwyI5OvdkZmofpNm9JYl7LYvOkGa0JQRXYGT04Vc&_nc_zt=23&_nc_ht=scontent.frdp2-1.fna&_nc_gid=ded32pOCt9hKv4ToH9PExQ&_nc_ss=7b2a8&oh=00_AQPorzJSqm1CkOLtHtgE4_kSZ83w4RIaAMN_lPZ95g5BsQ&oe=6ADC287F"
          alt="logo here"
        />
      </div>
      <div className="flex gap-6 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>My Project</p>
        <p>Contact</p>
      </div>
      <div>
        <button
          className="p-3 bg-blue-600 rounded rounded-[10px]"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          Create User
        </button>
      </div>
    </div>
  );
};

export default Nav;
