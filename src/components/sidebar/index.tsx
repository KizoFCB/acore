import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Stack
      sx={{
        padding: "8px",
        background: "white",
        width: "400px",
        height: "100%",
      }}
    >
      {/* <Box component="img" src={} alt="logo" /> */}
      <Stack
        direction="row"
        sx={{
          background: "grey",
          borderInlineEnd: "4px",
          borderInlineEndColor: "red",
        }}
      >
        {/* Icon book */}
        <Typography>Books</Typography>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
