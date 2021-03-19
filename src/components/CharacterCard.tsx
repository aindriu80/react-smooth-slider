import React from "react";
// Components

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

// Types
import { Character } from "../App";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 320,
  },
  media: {
    height: 150,
  },
});

type Props = {
  character: Character;
};

const CharacterCard: React.FC<Props> = ({ character }) => {
  const classes = useStyles();

  return (
    <Card className="classes.root">
      <CardMedia className={classes.media} image={character.img_url} />
    </Card>
  );
};

export default CharacterCard;
