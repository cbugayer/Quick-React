import CourseEditor from '../CourseEditor';
import { BrowserRouter } from "react-router-dom";

import './Edit.css';


const Edit = ({id, course}) => (
    <BrowserRouter>
        <div className="edit">
            {CourseEditor(id, course)}
        </div>
    </BrowserRouter>
);

export default Edit;