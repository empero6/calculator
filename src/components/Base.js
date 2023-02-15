import { Box } from "@mui/material";

const Base = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: 300,
        height: 300,
        border: "1px solid ",
        borderRadius: "5px",
        margin: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default Base;
