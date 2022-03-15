import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Serie from "./Serie";
import Message from "../Common/Message";

const SeriesList = ({ title, series}) => (
  <Fragment>
   
    <div className="container-list">
    <Message title={title} />
      <Grid container spacing={3} justify="center">
        {series.map((series) => {
          const { id, name, poster_path, vote_average } = series;
          return (
            <Serie
             key={id}
              id={id}
              name={name}
              poster_path={poster_path}
              vote_average={vote_average}
            />
          );
        })}
      </Grid>
    </div>
  </Fragment>
);

export default SeriesList;
