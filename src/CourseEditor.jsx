import { useDbUpdate } from './utilities/firebase';
import { useFormData } from './utilities/useFormData';
import { useNavigate } from "react-router-dom";
import Timespan from './components/Timespan';



const validateCourseData = (key, val) => {
  switch (key) {
    case 'term': 
        return ['Fall', 'Spring', 'Summer', 'Winter'].includes(val) && val.length > 1
        ? '' 
        : 'must be Fall, Winter, Spring, or, Summer';
    case 'number':
        return /^[0-9-]+$/.test(val) && val.length > 1
        ? '' 
        : 'must contain only numbers and hyphens';
    case 'title':
        return /^[a-zA-Z0-9 ,.'-]+$/.test(val) & val.length > 1
        ? ''
        : 'must contain only letters, numbers, and punctuation';
    case 'meets':
      console.log("val:", val);
        return Timespan(val)
        ? '' 
        : 'must be a valid timespan, e.g. "MTuWThF 10:00-10:50"';
    default: return '';
  }
};

const InputField = ({ name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({message, onSubmit, disabled}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      {/* <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button> */}
      <button type="submit" className="btn btn-primary me-auto" 
      onClick={(e)=>onSubmit(e)}>Submit</button>
      <span className="p-2">{message}</span>
    </div>
  );
};

const CourseEditor = ({id, course}) => {
  const [update, result] = useDbUpdate(`/courses/${id}`); // SOLVE THIS LINE
  const [state, change] = useFormData(validateCourseData, course);
  // console.log("course:", course);
  // console.log("state:", state);
  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      const valuesChanged = Object.keys(state.values).some(key => state.values[key] !== course[key]);
      if (valuesChanged) {
      update(state.values);
      }
    }
  };

  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField name="term" text="Term" state={state} change={change} />
      <InputField name="number" text="Number" state={state} change={change} />
      <InputField name="title" text="Title" state={state} change={change} />
      <InputField name="meets" text="Meets" state={state} change={change} />
      <ButtonBar message={result?.message} onSubmit={submit}/>
    </form>
  )
};

export default CourseEditor;