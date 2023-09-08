import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
        align: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
