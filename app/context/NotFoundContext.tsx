// context/NotFoundContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const NotFoundContext = createContext<{
  isNotFound: boolean;
  setIsNotFound: (val: boolean) => void;
}>({ isNotFound: false, setIsNotFound: () => {} });

export function NotFoundProvider({ children }: { children: ReactNode }) {
  const [isNotFound, setIsNotFound] = useState(false);
  return (
    <NotFoundContext.Provider value={{ isNotFound, setIsNotFound }}>
      {children}
    </NotFoundContext.Provider>
  );
}

export const useNotFound = () => useContext(NotFoundContext);
