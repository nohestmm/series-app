import React, { useEffect, useState, createContext } from "react";
import { getSerieDetails, getDescription } from "./../constants";
export const DetailsContext = createContext();

const DetailSeriesContextProvider = ({ children }) => {
  const common_id = window.location.pathname.split("/")[2];
  const [doneSerie, setDoneFetchSerie] = useState(false);
  const [serie, setSerie] = useState([]);
  const [doneDescription, setDoneFetchDescription] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    getSerie(common_id);
    getDescriptionSerie(common_id);
  }, [common_id]);

  const getSerie = (common_id) => {
    fetch(getSerieDetails(common_id))
      .then((res) => res.json())
      .then((data) => {
        setSerie(data);
        setDoneFetchSerie(true);
      })
      .catch((err) => console.log(err));
  };
  const getDescriptionSerie = (common_id) => {
    fetch(getDescription(common_id))
      .then((res) => res.json())
      .then((data) => {
        let dataDescripcion = data.translations.filter(
          (el) => el.iso_3166_1 === "ES"
        );

        setDescription(
          dataDescripcion.length
            ? dataDescripcion[0].data.overview
            : "sin descripción"
        );
        setDoneFetchDescription(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <DetailsContext.Provider
      value={{ serie, doneSerie, doneDescription, description }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailSeriesContextProvider;
//uso del Provider
