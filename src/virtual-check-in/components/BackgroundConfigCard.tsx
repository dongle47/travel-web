import { createStyles, makeStyles, useTheme } from "@mui/styles";
import { Typography, Card, CardContent } from "@mui/material";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import BlockIcon from "@mui/icons-material/Block";
import ImageButton from "./ImageButton";
import SelectionIconButton from "./SelectionIconButton";
import {
  BackgroundConfig,
  backgroundImageUrls,
} from "../helpers/backgroundHelper";

const Theme = useTheme();

type BackgroundConfigCardProps = {
  config: BackgroundConfig;
  onChange: (config: BackgroundConfig) => void;
};

function BackgroundConfigCard(props: BackgroundConfigCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          Background
        </Typography>
        <SelectionIconButton
          active={props.config.type === "none"}
          onClick={() => props.onChange({ type: "none" })}
        >
          <BlockIcon />
        </SelectionIconButton>
        <SelectionIconButton
          active={props.config.type === "blur"}
          onClick={() => props.onChange({ type: "blur" })}
        >
          <BlurOnIcon />
        </SelectionIconButton>
        {backgroundImageUrls.map((imageUrl) => (
          <ImageButton
            key={imageUrl}
            imageUrl={imageUrl}
            active={imageUrl === props.config.url}
            onClick={() => props.onChange({ type: "image", url: imageUrl })}
          />
        ))}
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
    },
  })
);

export default BackgroundConfigCard;
