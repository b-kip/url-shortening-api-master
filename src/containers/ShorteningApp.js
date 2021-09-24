import React, { useState } from 'react';
import ShorteningForm from './ShorteningForm';
import ShortenedUrls from './ShortenedUrls';

// state
  // inputUrl
  // outputUrl

// function
  // fetchingUrl

export default function ShorteningApp() {
  const [url, setUrl] = useState('');
  const [urlError, setUrlError] = useState({
    message: '',
    isError: false
  });

  function handleUrlUpdate(e) {
    setUrl(e.target.value);
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    let urlValidation = isUrlValid(url);
    console.log(urlValidation);
    
    if(urlValidation.isValid) {
      // fetch data.
      console.log('Form submitted');
    }else {
      console.log('url is invalid');
    }
    
    setUrlError({
      isError: !urlValidation.isValid,
      message: urlValidation.errorMessage,
    });
  }


  return (
    <>
      <ShorteningForm 
        url={url} 
        onUrlUpdate={handleUrlUpdate} 
        onFormSubmission={handleFormSubmission}
        error={urlError.isError}
        errorMessage={urlError.message}
      />
      <ShortenedUrls />
    </>
  );
}

function isUrlValid(url) {
  // const urlRe = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{1,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const urlRe = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{1,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;

  if (url==="") {
    // console.log('Invalid url');
    return {
      isValid: false,
      errorMessage: 'Please add a link',
    };
  }
  if(!urlRe.test(url)) {
    // console.log("Invalid url");
    return {
      isValid: false,
      errorMessage: "Enter a correctly formatted url",
    }
  }

  return {
    isValid: true,
    errorMesage: ""
  };
}