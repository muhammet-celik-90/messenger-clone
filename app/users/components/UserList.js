"use client";

import { Box } from "@mui/material";
import UserBox from "./UserBox";

export default function UserList({ items }) {
  return (
    <Box
      component="aside"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "270px",
        p: 1,
      }}
    >
      <Box component="div" sx={{ p: 1, fontWeight: "bold" }}>
        <Box>People</Box>
      </Box>
      {items.map((item) => (
        <UserBox key={item.id} data={item} />
      ))}
    </Box>
  );
}
