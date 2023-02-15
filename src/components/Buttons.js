import { Box, Button, Grid } from "@mui/material";

const Buttons = ({ onClick }) => {
  const handleClick = (input) => {
    onClick(input);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Grid container spacing={4} columns={16}>
          <Grid item xs={5}>
            <Button
              onClick={() => {
                handleClick("AC");
              }}
            >
              AC
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              onClick={() => {
                handleClick("1");
              }}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              onClick={() => {
                handleClick("2");
              }}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              onClick={() => {
                handleClick("3");
              }}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              onClick={() => {
                handleClick("4");
              }}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              onClick={() => {
                handleClick("5");
              }}
            >
              5
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              onClick={() => {
                handleClick("6");
              }}
            >
              6
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              onClick={() => {
                handleClick("7");
              }}
            >
              7
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              onClick={() => {
                handleClick("8");
              }}
            >
              8
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              onClick={() => {
                handleClick("9");
              }}
            >
              9
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              onClick={() => {
                handleClick("0");
              }}
            >
              0
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              onClick={() => {
                handleClick("/");
              }}
            >
              /
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={4}>
          <Grid item>
            <Button
              onClick={() => {
                handleClick("*");
              }}
            >
              *
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                handleClick("+");
              }}
            >
              +
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                handleClick("-");
              }}
            >
              -
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                handleClick("=");
              }}
            >
              =
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Buttons;
