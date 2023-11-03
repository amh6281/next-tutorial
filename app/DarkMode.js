"use client";

import { useEffect } from "react";

const DarkMode = () => {
  useEffect(() => {
    const cookieValue = ("; " + document.cookie)
      .split(`; mode=`)
      .pop()
      .split(";")[0];

    if (cookieValue == "") {
      document.cookie = "mode=light; max-age" + 3600 * 24 * 400;
    }
  }, []);

  const handleClick = (e) => {
    let 쿠키값 = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];
    if (쿠키값 == "light") {
      document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
    } else {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
    }
  };

  return <button onClick={handleClick}>DarkMode</button>;
};

export default DarkMode;
