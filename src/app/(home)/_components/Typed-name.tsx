"use client";

import { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypedName = () => {
  const typedNameRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedNameRef.current, {
      strings: ["<span>Lucas Leão</span>"],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedNameRef}></span>;
};

export default TypedName;
