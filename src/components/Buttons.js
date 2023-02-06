import { Box, Button, Grid } from "@mui/material";

const Buttons = () => {
  const inputHandler = () => {
    console.log("Button Clicked!");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Grid container spacing={4} columns={16}>
          <Grid item xs={5}>
            <Button>AC</Button>
          </Grid>
          <Grid item xs={5}>
            <Button>1</Button>
          </Grid>
          <Grid item xs={5}>
            <Button>2</Button>
          </Grid>
          <Grid item xs={5}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={5}>
            <Button>4</Button>
          </Grid>
          <Grid item xs={5}>
            <Button>5</Button>
          </Grid>
          <Grid item xs={5}>
            <Button>6</Button>
          </Grid>
          <Grid item xs={5}>
            <Button>7</Button>
          </Grid>
          <Grid item xs={5}>
            <Button>8</Button>
          </Grid>
          <Grid item xs={5}>
            <Button>9</Button>
          </Grid>
          <Grid item xs={5}>
            <Button>0</Button>
          </Grid>
          <Grid item xs={5}>
            <Button>/</Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={4}>
          <Grid item>
            <Button>*</Button>
          </Grid>
          <Grid item>
            <Button>+</Button>
          </Grid>
          <Grid item>
            <Button>-</Button>
          </Grid>
          <Grid item>
            <Button>=</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Buttons;
