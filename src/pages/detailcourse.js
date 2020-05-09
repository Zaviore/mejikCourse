import React from "react";
import Nevbar from "../component/navbar";
import Content from "../component/bannervideo";
import Content2 from "../component/lecture";

const DetailCourse = () => {
  return (
    <div>
      <div>
        <Nevbar />
      </div>
      <div>
        <Content />
        <Content2 />
      </div>
    </div>
  );
};
export default DetailCourse;
