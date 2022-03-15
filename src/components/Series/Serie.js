import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
  });

const Serie = ({ name, id, poster_path, vote_average }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={3}>
    <Link className="buttonPrimary" to={`/serie/${id}`}>
    <Card className={classes.root}>
      <CardActionArea>
    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} className="image-serie"/>

      </CardActionArea>
    </Card>
      </Link>
    </Grid>
  );
};

export default Serie;
