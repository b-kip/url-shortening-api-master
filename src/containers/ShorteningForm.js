export default function ShorteningForm({ 
  url, onUrlUpdate, onFormSubmission, error, errorMessage 
}) {
  return(
    <form className={`shortening-form ${error && 'error' }`} onSubmit={onFormSubmission}>
      <div className="input-container">
        <input 
          className="url-input"
          value={url}
          name="url" 
          type="text" 
          placeholder="Shorten a link here..." 
          onChange={onUrlUpdate}
        />
        { error && <p className="error-message">{errorMessage}</p>}
      </div>
      <input type="submit" value="Shorten It!" className="btn btn--accent btn-form-btn"/>
    </form>
  );
}