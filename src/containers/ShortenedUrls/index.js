import React, { useState } from 'react';

export default function ShortenedUrls({ shortenedUrls }) {
  const [copied, setCopied] = useState(false);

  function copyUrl() {
    let selection = window.getSelection();
    const outputUrl = document.querySelector('.output-url')

    if(selection.rangeCount > 0) {
      selection.removeAllRanges();
    }
    
    let range = document.createRange();
    range.selectNode(outputUrl);
    
    selection.addRange(range);
    document.execCommand('copy');

    // swap copy for copied, change class to btn-dark
    setCopied(true);
  }

  return (
    <section className="shortening-results">
      <ul className="shortening-results__list">
        {
          shortenedUrls.shortLinkList.map((shortLink, index) => (
            <li key={index}className="shortening-results__list__item">
              <p className="input-url">
                {shortenedUrls.originalUrl}
              </p>
              <div className="output-container">
                <p className="output-url">{shortLink}</p>
                <button 
                  className={
                    `btn btn--radius-small ${ copied ? 'btn--dark' : 'btn--accent'}  `
                  }
                  onClick={copyUrl}
                >
                  Copied
                </button>
              </div>
            </li>
          ))
        }
        {/* <li className="shortening-results__list__item">
          <p className="input-url">https://www.frontendmentor.io</p>
          <div className="output-container">
            <p className="output-url">https://rel.ink/k4lKyk</p>
            <button className="btn btn--radius-small btn--accent">Copy</button>
          </div>
        </li>
        <li className="shortening-results__list__item">
          <p className="input-url">https://twitter.com/frontendmentor</p>
          <div className="output-container">
            <p className="output-url">https://rel.ink/gxOXp9</p>
            <button className="btn btn--radius-small btn--dark ">Copied</button>
          </div>
        </li>
        <li className="shortening-results__list__item">
          <p className="input-url">https://www.linkedin.com/company/frontend-mentor</p>
          <div className="output-container">
            <p className="output-url">https://rel.ink/gob3X9</p>
            <button className="btn btn--radius-small btn--accent">Copy</button>
          </div>
        </li> */}
      </ul>
    </section>
  );
}