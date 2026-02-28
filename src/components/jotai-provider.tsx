"use client"

import { Provider } from "jotai";

interface JoitaiProviderProps {
  children: React.ReactNode;
};

export const JoitaiProvider = ({ children }: JoitaiProviderProps) => {
  return (
    <Provider>
      {children}
    </Provider>
  );
};