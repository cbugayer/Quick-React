import { useState } from "react";
import TermSelector from "./TermSelector";
import CourseCard from "./CourseCard";




const Term = ({selection, courses}) => (
    <div className="product-list">
        { courses.filter(course => course.term === selection)
        .map(course => <CourseCard key={course.id} course={course} />) }
    </div>
);

const TermPage = (courses) => {
  const [selection, setSelection] = useState(() => "Fall");
  return (
    <div>
      <TermSelector selection={selection} setSelection={setSelection} />
      <Term selection={selection} courses={courses} />
    </div>
  );
}

export default TermPage;