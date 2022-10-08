/**
 * @file NewsCard.js
 * @author Devin Arena
 * @description A card displaying a news post from a subreddit.
 * @since 10/7/2022
 **/

import { Box, Button, Link, Typography, useTheme } from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
import LaunchIcon from "@mui/icons-material/Launch";
import { useEffect } from "react";

const NewsCard = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: 1,
        p: { xs: 1, sm: 2 },
        my: 1,
        border: theme.palette.border,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link href={`https://reddit.com/r/${props.news.subreddit}`}>
        <Typography variant="h6">r/{props.news.subreddit}</Typography>
      </Link>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", fontSize: { xs: 16, sm: 24 } }}
      >
        {props.news.title}
      </Typography>
      <Typography
        variant="p"
        sx={{ fontStyle: "italic", fontSize: { xs: 14, sm: 18 } }}
      >
        {props.news.date}
      </Typography>
      <Typography variant="p" sx={{ fontSize: { xs: 14, sm: 18 } }}>
        {props.news.author}
      </Typography>
      <Box
        sx={{
          flex: 1,
          mt: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          sx={{ py: 1.75 , mx: { xs: 0.5, sm: 1 } }}
          href={props.news.reddit_url}
        >
          <RedditIcon sx={{ fontSize: { xs: 20, sm: 32 } }} />
        </Button>
        <Button
          variant="outlined"
          sx={{ py: 1.75, mx: { xs: 0.5, sm: 1 } }}
          href={props.news.url}
        >
          <LaunchIcon sx={{ fontSize: { xs: 20, sm: 32 } }} />
        </Button>
      </Box>
    </Box>
  );
};

export default NewsCard;
