import React, { useState, useEffect } from 'react';
import usePersistentState from '../customHooks//usePersistentState';
import ShorteningForm from './ShorteningForm';
import ShortenedUrls from './ShortenedUrls';
const API_URL = 'https://api.shrtco.de/v2/shorten?url=';


export default function ShorteningApp() {
  const [url, setUrl] = useState('');
  const [urlError, setUrlError] = useState({
    message: '',
    isError: false
  });
  const [shortenedUrls, setShortenedUrls] = usePersistentState(
    'shortenedUrl',
    {
      shortLinkList:[],
      originalUrl: ""
    }
  );

  useEffect(() => {
    // fetch data.
    async function fetchUrls() {
      if(url!=="") {
        const data = await getUrl(url);
        setShortenedUrls(data);
        console.log(data);
      }
    }
    fetchUrls();
  }, [url, setShortenedUrls]);

  function handleSubmit(inputUrl) {
    let urlValidation = isUrlValid(inputUrl);
    console.log(urlValidation);

    if(urlValidation.isValid) {
      setUrl(inputUrl);
    } else {
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
        onFormSubmission={handleSubmit}
        error={urlError.isError}
        errorMessage={urlError.message}
      />
      <ShortenedUrls shortenedUrls={shortenedUrls}/>
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

// get shortened url
async function getUrl(url="https://www.frontendmentor.io") {
    try {
        const response = await fetch(`${API_URL}${url}`);
        const data = await response.json();
        console.log(data);
        const linkData = {
            originalUrl: data.result["original_link"],
            shortLinkList: [
                data.result["full_short_link"],
                data.result["full_short_link2"],
                data.result["full_short_link3"],
            ]
        }
        localStorage.setItem('shortenedUrl', JSON.stringify(linkData));
        // console.log(linkData);
        return linkData;
    } catch (e) {
        console.log(e);
    }
}
