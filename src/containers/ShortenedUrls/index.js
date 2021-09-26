import React from 'react';
import ShortenedUrlItem from './ShortenedUrlItem';

export default function ShortenedUrls({ shortenedUrls }) {
  return (
    <section className="shortening-results">
      <ul className="shortening-results__list">
        {
          shortenedUrls.shortLinkList.map((shortLink, index) => (
            <ShortenedUrlItem 
              key={index} 
              originalUrl={shortenedUrls.originalUrl}
              shortenedUrl={shortLink}
            />
          ))
        }
      </ul>
    </section>
  );
}