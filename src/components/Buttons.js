import { Box, Button, Grid } from "@mui/material";

const Buttons = ({ onClick }) => {
  const handleClick = (input) => {
    onClick(input);
  };

  const numOptions = [
    "AC",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "/",
  ];

  const operatorOptions = ["*", "+", "-", "="];

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Grid container spacing={4} columns={16}>
          {numOptions.map((x) => {
            return (
              <Grid item xs={5}>
                <Button
                  onclick={() => {
                    handleClick(x);
                  }}
                >
                  {x}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box>
        <Grid container spacing={4} columns={16}>
          {operatorOptions.map((x) => {
            return (
              <Grid item>
                <Button
                  onclick={() => {
                    handleClick(x);
                  }}
                >
                  {x}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Buttons;
