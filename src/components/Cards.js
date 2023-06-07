import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ category, courses }) => {
  const [likedCourses, setLikedCourses] = useState([]);
  // let courses = [];
  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }

  if (courses.length === 0) {
    return <div className="text-white capitalize text-[1.5rem]  ">
    <p className="flex items-center justify-center w-[50vw] h-[50vh]">new courses coming soon! </p></div>;
  } else {
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {getCourses().map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          );
        })}
      </div>
    );
  }
};

export default Cards;
