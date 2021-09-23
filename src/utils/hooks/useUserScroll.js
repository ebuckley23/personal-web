import React, { useEffect, useState, useCallback } from 'react';

let winHeight, docHeight, trackLength, throttleScroll;

function getDocHeight() {
  const D = document;
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  )
}

function getMeasurements() {
  winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
  docHeight = getDocHeight()
  trackLength = docHeight - winHeight;
}

/**
 * @see http://www.javascriptkit.com/javatutors/detect-user-scroll-amount.shtml
 */
export const useUserScroll = () => {
  const [pct, setPct] = useState(0);

  function amountScrolled() {
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const pctScrolled = Math.floor((scrollTop / trackLength) * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    setPct(pctScrolled)
  }

  // function throttle() {
  //   clearTimeout(throttleScroll);
  //   throttleScroll = setTimeout(function() {
  //     amountScrolled();
  //   }, 50)
  // }


  useEffect(() => {
    getMeasurements();
    amountScrolled();
    window.addEventListener('resize', getMeasurements, false);
    window.addEventListener('scroll', amountScrolled, false);
    return () => {
      window.removeEventListener('resize', getMeasurements, false);
      window.removeEventListener('scroll', amountScrolled, false);
    }
  }, [])

  return { pct }
}
