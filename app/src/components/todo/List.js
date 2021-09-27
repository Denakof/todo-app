import React from "react";
import SettingsContext from "../../context/settings";
import { useContext } from "react";
import { Checkbox } from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea,
} from "@mui/material";

export default function List(props) {
  const site = useContext(SettingsContext);
  return (
    //  !item.complete && state.display &&(
    <div>
      {props.list.map((item) => (
        <Card  key={item.id} sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardContent>
              {/* <Typography gutterBottom variant="h5" component="div">
              ITEM NUMBER : <small> {item.id}</small>
              </Typography> */}
              <Typography variant="body2" color="text.secondary">
                {item.text}
              </Typography>
              <Typography>Difficulty: {item.difficulty}</Typography>
              <Typography>Assigned to: {item.assignee}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              onClick={() => props.toggleComplete(item.id)}
              size="small"
              color="primary"
            >
             Complete: {item.complete.toString()}
              <Checkbox   />

            </Button>
          <hr/>
          </CardActions>
        </Card>
        // <div key={item.id}>
        //   <p>{item.text}</p>
        //   <p>
        //     <small>Assigned to: {item.assignee}</small>
        //   </p>
        //   <p>
        //     <small>Difficulty: {item.difficulty}</small>
        //   </p>
        //   <div onClick={() => props.toggleComplete(item.id)}>
        //     Complete: {item.complete.toString()}
        //   </div>
        //   <hr />
        // </div>
      ))}
    </div>)
  );
}
