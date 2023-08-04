"use client";

import { Avatar, Badge } from "@mui/material";

export default function AvatarComp({ user }) {
  return (
    <Badge color="success" variant="dot" overlap="circular">
      <Avatar
        alt={user?.name || "Guest"}
        src={user?.image || "/images/avatar.jpg"}
      />
    </Badge>
  );
}
