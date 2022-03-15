import React from 'react';
import { Button, styled} from '@material-ui/core';

import { Link } from 'react-router-dom';
const ButtonDetails = styled(Button)({
  boxShadow:"none",
  backgroundColor: "#f7ca0f"

});
const ButtonChange = ({type, to}) => (

    <Link  to={ to } className={`${type === "vermas" ? "seemore" : "buttonBack"}`}>
    <ButtonDetails variant="contained"  className={`${type === "vermas" ? "seemore" : "back"}`}>
      { type === "vermas" ? "Ir al detalle": "volver" }
    </ButtonDetails>
  </Link>
)

export default ButtonChange