import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import classes from "../components/Base.module.css";

const Base = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: 300,
        height: 300,
        border: "1px solid ",
        borderRadius: "15px",
      }}
    >
      {children}
    </Box>
  );
};

export default Base;
