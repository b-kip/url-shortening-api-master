import React, { useState, useRef } from 'react';

export default function ShortenedUrlItem({ originalUrl, shortenedUrl }) {
  const [copied, setCopied] = useState(false);
  const copyNode = useRef();

  function copyUrl() {
    let selection = window.getSelection();

    if(selection.rangeCount > 0) {
      selection.removeAllRanges();
    }
    
    let range = document.createRange();
    range.selectNode(copyNode.current);
    
    selection.addRange(range);
    document.execCommand('copy');

    // swap copy for copied, change class to btn-dark
    setCopied(true);
  }

  return (
    <li className="shortening-results__list__item">
      <p className="input-url">
        {originalUrl}
      </p>
      <div className="output-container">
        <p ref={copyNode}className="output-url">{shortenedUrl}</p>
        <button 
          className={
            `btn btn--radius-small ${ copied ? 'btn--dark' : 'btn--accent'}  `
          }
          onClick={copyUrl}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </li>
  );
}