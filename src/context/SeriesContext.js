import React, { createContext, useEffect } from "react";
import useGetSerie from "../custom-hooks/useGetSerie";
export const SeriesContext = createContext();

const SeriesContextProvider = ({ children }) => {
  const {
    doneFetch,
    title,
    series,
    doneFetchProvider,
    provider,
    validateTerm,
    getSeriesNetwork,
    getSeries,
    active,
    getProvider
  } = useGetSerie()


  useEffect(() => {
    getSeries();
    getProvider();
  }, []);

 

  return (
    <SeriesContext.Provider value={{ doneFetch, title, series, doneFetchProvider, provider, validateTerm, getSeriesNetwork, active }}>
      {children}
    </SeriesContext.Provider>
  );
};

export default SeriesContextProvider;
//uso del Provider