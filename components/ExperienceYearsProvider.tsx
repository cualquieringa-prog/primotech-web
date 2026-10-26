"use client";

import { createContext, useContext } from "react";

const InitialYearsContext = createContext(0);

export function ExperienceYearsProvider({
  initialYears,
  children,
}: {
  initialYears: number;
  children: React.ReactNode;
}) {
  return <InitialYearsContext.Provider value={initialYears}>{children}</InitialYearsContext.Provider>;
}

export function useInitialExperienceYears() {
  return useContext(InitialYearsContext);
}
