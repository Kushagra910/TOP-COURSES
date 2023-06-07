import React from 'react'
import { GiFlamer,GiFlamingTrident } from "react-icons/gi";
import {toast} from 'react-toastify';

const Card = ({course,setLikedCourses,likedCourses}) => {

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev) => prev.filter((cid) => ( cid !==  course.id)));
      toast.warning("Improvement Required");
    }
    else{
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev) => [...prev,course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80  rounded-md overflow-hidden'>
      <div className='relative '>
        <img src={course.image.url} alt={course.image.alt}></img>
        <div className={`w-[30px] h-[30px] ${ likedCourses.includes(course.id) ? "bg-amber-200" : "bg-black"} rounded-full absolute right-2 bottom-[-10px] grid place-items-center `}>
        <button onClick={clickHandler}>
          {
            (likedCourses.includes(course.id)) ? <GiFlamingTrident fontSize="1.6rem" color='red' /> : <GiFlamer fontSize="1.76rem" color='white' />
          }
        </button>
        </div>
      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6 '>{course.title}</p>
        <p className='text-white mt-2'>
        {
          course.description.length>100 ? 
          (`${course.description.substr(0,100)}...`) : 
          (course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card