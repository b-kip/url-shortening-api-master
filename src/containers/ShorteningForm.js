export default function ShorteningForm() {
  return(
    <form className="shortening-form">
      <div className="input-container">
        <input className="url-input" name="url" type="text" placeholder="Shorten a link here..." />
        <p className="error-message">Please add a link</p>
      </div>
      <input type="submit" value="Shorten It!" className="btn btn--accent btn-form-btn"/>
    </form>
  );
}