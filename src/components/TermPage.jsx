import { useState } from "react";
import TermSelector from "./TermSelector";
import CourseCard from "./CourseCard";

const Term = ({selection, courses, selected, toggleSelected}) => (
    <div className="product-list">
        { courses.filter(course => course[1].term === selection)
        .map(course => (
        <CourseCard 
          id={course[0]}
          course={course[1]} 
          selected={selected} 
          toggleSelected={toggleSelected} />))}
    </div>
);

// selection refers to the term selected by the user
// selected refers to the courses selected by the user

const TermPage = (courses, selected, toggleSelected ) => {
  const [selection, setSelection] = useState(() => "Fall");
  return (console.log(courses),
    <div>
      <TermSelector 
        selection={selection} 
        setSelection={setSelection} 
      />
      
      <Term 
        selection={selection} 
        courses={courses} 
        selected={selected} 
        toggleSelected={toggleSelected} 
      />
    </div>
  );
}

export default TermPage;