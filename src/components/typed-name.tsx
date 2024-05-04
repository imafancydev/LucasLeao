"use client";

import { useRef, useEffect } from "react";

import Typed from "typed.js";

interface TypedNameProps {
  name: string;
  className: string;
}

const TypedName = ({ name, className }: TypedNameProps) => {
  const typedNameRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedNameRef.current, {
      strings: [`<span>${name}</span>`],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, [name]);
  return <span ref={typedNameRef} className={className}></span>;
};

export default TypedName;
