import Grow from "@mui/material/Grow";

const SimpleGrow = (content) => {
  return (
    <>
      <Grow
        in={true}
        style={{ transformOrigin: "0 0 0" }}
        {...(true ? { timeout: 1000 } : {})}
      >
        {content.children}
      </Grow>
    </>
  );
};

export default SimpleGrow;
