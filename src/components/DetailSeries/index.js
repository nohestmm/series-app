import React, { useContext } from "react";
import { DetailsContext } from "../../context/DetailSeriesContext";
import Details from "./Details";
import ButtonChange from "../Common/ButtonChange";

const DetailsSeries = () => {
  const { serie, doneSerie, doneDescription, description  } = useContext(DetailsContext);
  return (
    <>
      {doneSerie  ? (
        <Details serie={serie} doneSerie={doneSerie} doneDescription={doneDescription} description={description}  />
      ) : (
        "Loading..."
      )}
      <ButtonChange type="Volver" to="/" />
    </>
  );
};

export default DetailsSeries;
