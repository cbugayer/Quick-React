import { useState } from "react";
import TermSelector from "./TermSelector";
import CourseCard from "./CourseCard";

const Term = ({selection, courses, selected, unselectables, toggleSelected, toggleUnselectables}) => (
  console.log("Unselectables:", unselectables),
    <div className="product-list"> 
        { courses.filter(course => course[1].term === selection)
        .map(course => (
        <CourseCard 
          key={course[0]}
          id={course[0]}
          course={course[1]} 
          selected={selected} 
          unselectables={unselectables}
          toggleSelected={toggleSelected} 
          toggleUnselectables={toggleUnselectables}/>))}
    </div>
);

// selection refers to the term selected by the user
// selected refers to the courses selected by the user

const TermPage = (courses, selected, unselectables, toggleSelected, toggleUnselectables ) => {
  const [selection, setSelection] = useState(() => "Fall");
  return (
    <div>
      <TermSelector 
        selection={selection} 
        setSelection={setSelection} 
      />
      
      <Term 
        selection={selection} 
        courses={courses} 
        selected={selected} 
        unselectables={unselectables}
        toggleSelected={toggleSelected} 
        toggleUnselectables={toggleUnselectables}
      />
    </div>
  );
}

export default TermPage;