/**
 * @file NewsCard.js
 * @author Devin Arena
 * @description A card displaying a news post from a subreddit.
 * @since 10/7/2022
 **/

import { Box, IconButton, Typography } from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";

const NewsCard = (props) => {
  return (
    <Box sx={{ flex: 1, p: 2, border: "3px solid rgba(255, 255, 255, 0.025)" }}>
      <Typography variant="h6">{props.title}</Typography>
      <Typography variant="p" sx={{ fontStyle: "italic" }}>
        {props.date}
      </Typography>
      <Typography variant="p">{props.text}</Typography>
      <IconButton><RedditIcon /></IconButton>
    </Box>
  );
};

export default NewsCard;
