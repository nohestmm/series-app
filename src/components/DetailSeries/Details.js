import React from "react";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core";

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "auto",
    position: "relative",
    border: "none",
    boxShadow: "none",
    borderRadius: "0"
  },
  season: {
    borderRadius: "0",
  },
}));

const DetailsSeries = ({ serie, description }) => {
  const { name, vote_average, seasons, backdrop_path } = serie;
  const classes = useStyles();
  return (
    <div className="root-container">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className="container-image">
              <img
                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                alt={name}
              />
            </div>
            <div className="container-name">
              {" "}
              <p className="text-name">{name}</p>
              <p className="text-average">Puntuación: {vote_average}</p>
              <p className="text-description">{description}</p>
            </div>
          </Paper>
          <Paper className={classes.season}>
            <div className="container-season">
              {seasons.map((season) => {
                return (
                  <div
                    className="seasons-content"
                    key={season.id}
                    id={season.id}
                  >
                    <p>{season.name}</p>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                      alt={season.name}
                      height="150"
                    />
                  </div>
                );
              })}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailsSeries;
