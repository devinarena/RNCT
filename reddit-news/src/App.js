import { Box, Button, TextField, Typography } from "@mui/material";
import NewsCard from "./NewsCard";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DarkModeIcon from '@mui/icons-material/DarkMode';
/**
 * @file App.js
 * @author Devin Arena
 * @description Reddit News Comparison Tool App.
 * @since 10/7/2022
 **/

const App = () => {
  const loadArticles = () => {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 900, mt: 3, p: 3 }}>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "row" }}>
          <Box sx={{ flex: 1, mr: 2 }}>
            <Typography variant="h3">Reddit News Comparison Tool</Typography>
            <Typography variant="h5">
              Compare news sources of two subreddits.
            </Typography>
          </Box>
          <Box sx={{ mx: 2, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
            <Button variant="outlined"> 
              <ArrowRightAltIcon /> 
            </Button>
            <Button variant="outlined">
              <DarkModeIcon/>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              flex: 1,
              mr: 3,
              border: "3px solid rgba(255, 255, 255, 0.05)",
              p: 2,
            }}
          >
            <Typography variant="h6" sx={{}}>
              Subreddit 1
            </Typography>
            <TextField
              sx={{ width: "100%", mt: 1 }}
              label="Subreddit"
              variant="outlined"
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                mt: 3,
              }}
            >
              <NewsCard title={"Test Card"} date={"10/7/2022"} />
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              mr: 3,
              border: "3px solid rgba(255, 255, 255, 0.05)",
              p: 2,
            }}
          >
            <Typography variant="h6">Subreddit 2</Typography>
            <TextField
              sx={{ width: "100%", mt: 1 }}
              label="Subreddit"
              variant="outlined"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
