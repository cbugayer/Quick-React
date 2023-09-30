import { useState } from 'react';
import CourseCards from "./CourseCards";

const SelectedPage = ({courses}) => {
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  return (
    <CourseCards courses={courses} selected={selected} toggleSelected={toggleSelected} />
  );
};

export default SelectedPage;