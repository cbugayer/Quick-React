const quarters = [
    'Fall',
    'Winter',
    'Spring'
    ];

const TermButton = ({quarter, selection, setSelection}) => (
    <div>
      <input type="radio" id={quarter} className="btn-check" 
      checked={quarter === selection} autoComplete="off"
        onChange={() => setSelection(quarter)} />
      <label className="btn btn-success mb-1 p-2" htmlFor={quarter}>
      { quarter }
      </label>
    </div>
  );
  
  const TermSelector = ({selection, setSelection}) => (
    <div className="btn-group">
      { 
        quarters.map(quarter => <TermButton key={quarter} quarter={quarter} 
            selection={selection} setSelection={setSelection} />)
      }
    </div>
  );

export default TermSelector;