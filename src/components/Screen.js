import { Box, Card, CardContent, TextField, Typography } from "@mui/material";

const Screen = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", width: "inherit" }}>
      <TextField
        sx={{
          width: "inherit",
        }}
        size="md"
        variant="filled"
      />
    </Box>
  );
};

export default Screen;
