import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import classes from "../components/Base.module.css";

const Base = () => {
  return (
    <Box
      sx={{
        display: "inline-block",
        mx: "2px",
        transform: "scale(0.8)",
      }}
    />
  );
};

export default Base;
