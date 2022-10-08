import {
  Box,
  Button,
  CssBaseline,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import NewsCard from "./NewsCard";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import { darkTheme, lightTheme } from "./Theme";

/**
 * @file App.js
 * @author Devin Arena
 * @description Reddit News Comparison Tool App.
 * @since 10/7/2022
 **/

const App = () => {
  const MAX_POSTS = 100;
  const MIN_POSTS = 1;

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const getTheme = () => {
    return theme === "dark" ? darkTheme : lightTheme;
  };

  const [numPosts, setNumPosts] = useState(10);

  const [errorText, setErrorText] = useState("");

  const [subA, setSubA] = useState("");
  const [subB, setSubB] = useState("");

  const [newsA, setNewsA] = useState([]);
  const [newsB, setNewsB] = useState([]);

  const loadArticles = () => {
    setErrorText("");
    let error = false;
    // we'll just require the first sub, though the tool assumes you're comparing
    if (!subA) {
      setErrorText((errorText) => errorText + "Subreddit A is required.\n");
      error = true;
    }
    // validate post number
    if (numPosts > MAX_POSTS || numPosts < MIN_POSTS) {
      setErrorText(
        (errorText) =>
          errorText +
          `Number of posts must be between ${MIN_POSTS} and ${MAX_POSTS}.`
      );
      error = true;
    }

    if (error) return;

    // fetch posts from subreddit A

    fetch(`https://www.reddit.com/r/${subA}/hot.json?limit=${numPosts}`).then(
      (res) => {
        if (!res.ok) {
          setErrorText((errorText) => errorText + "Subreddit A is invalid.");
          return;
        }
        res.json().then((json) => {
          console.log(json);
          setNewsA(
            json.data.children.map((child) => {
              return {
                subreddit: subA,
                title: child.data.title,
                author: child.data.author,
                url: child.data.url,
                reddit_url: `https://reddit.com${child.data.permalink}`,
                date: new Date(child.data.created_utc * 1000).toLocaleString(),
              };
            })
          );
        });
      }
    );

    // fetch posts from subreddit B

    if (subB) {
      fetch(`https://www.reddit.com/r/${subB}/hot.json?limit=${numPosts}`).then(
        (res) => {
          if (!res.ok) {
            setErrorText((errorText) => errorText + "Subreddit B is invalid.");
            return;
          }
          res.json().then((json) => {
            console.log(json);
            setNewsB(
              json.data.children.map((child) => {
                return {
                  subreddit: subB,
                  title: child.data.title,
                  author: child.data.author,
                  url: child.data.url,
                  reddit_url: `https://reddit.com${child.data.permalink}`,
                  date: new Date(
                    child.data.created_utc * 1000
                  ).toLocaleString(),
                };
              })
            );
          });
        }
      );
    }
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: 900 },
            mt: 3,
            p: { xs: 1.5, sm: 3 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flex: 1, display: "flex", flexDirection: "row" }}>
            <Box sx={{ flex: 1, mr: 2 }}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: 28, sm: 36, md: 44 } }}
              >
                Reddit News Comparison Tool
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: 18, sm: 24, md: 28 } }}
              >
                Compare news sources of two subreddits.
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }}
              >
                Fast, simple, and{" "}
                <Link href="https://github.com/devinarena/RNCT">
                  open-source
                </Link>
                .
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ p: 2, mx: 1 }}
                  onClick={loadArticles}
                >
                  <PlayArrowIcon />
                </Button>
                <Button
                  variant="contained"
                  sx={{ p: 2, mx: 1 }}
                  onClick={toggleTheme}
                >
                  {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                </Button>
              </Box>
              <Box sx={{ mt: 1.5 }}>
                <TextField
                  label="Number of Posts"
                  type="number"
                  value={numPosts}
                  onChange={(e) => setNumPosts(e.target.value)}
                ></TextField>
              </Box>
            </Box>
          </Box>

          {errorText && (
            <Typography
              variant="h6"
              sx={{ whiteSpace: "pre-wrap", color: "red", mt: 3 }}
            >
              {errorText}
            </Typography>
          )}

          <Box
            sx={{
              mt: 3,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                flex: 1,
                mr: { xs: 0.5, sm: 2 },
                border: getTheme().palette.border,
                p: { xs: 1, sm: 2 },
              }}
            >
              <Typography variant="h6" sx={{ fontSize: { xs: 18, sm: 24 } }}>
                Subreddit 1
              </Typography>
              <TextField
                sx={{ width: "100%", mt: 1 }}
                label="Subreddit"
                variant="outlined"
                value={subA}
                onChange={(e) => setSubA(e.target.value)}
                required
              />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  mt: 3,
                }}
              >
                {newsA &&
                  newsA.map((news, idx) => {
                    return <NewsCard key={idx} news={news} />;
                  })}
              </Box>
            </Box>

            <Box
              sx={{
                flex: 1,
                ml: { xs: 0.5, sm: 2 },
                border: getTheme().palette.border,
                p: { xs: 1, sm: 2 },
              }}
            >
              <Typography variant="h6" sx={{ fontSize: { xs: 18, sm: 24 } }}>
                Subreddit 2
              </Typography>
              <TextField
                sx={{ width: "100%", mt: 1 }}
                label="Subreddit"
                variant="outlined"
                InputLabelProps={{ fontSize: { xs: 18, sm: 24 } }}
                value={subB}
                onChange={(e) => setSubB(e.target.value)}
              />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  mt: 3,
                }}
              >
                {newsB &&
                  newsB.map((news, idx) => {
                    return <NewsCard key={idx} news={news} />;
                  })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
