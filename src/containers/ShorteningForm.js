import { useState } from 'react';

export default function ShorteningForm({ 
  onFormSubmission, error, errorMessage 
}) {
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmission(input);
    // setInput("");
  }
  return(
    <form className={`shortening-form ${error && 'error' }`} onSubmit={handleSubmit}>
      <div className="input-container">
        <input 
          className="url-input"
          value={input}
          name="url" 
          type="text" 
          placeholder="Shorten a link here..." 
          onChange={(e) => { setInput(e.target.value)}}
        />
        { error && <p className="error-message">{errorMessage}</p>}
      </div>
      <input type="submit" value="Shorten It!" className="btn btn--accent btn-form-btn"/>
    </form>
  );
}