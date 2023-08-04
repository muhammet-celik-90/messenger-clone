"use client";

import { Box } from "@mui/material";
import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

export default function MobileFooter() {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <Box sx={{ 
        display: { xs: "flex", md: "none" },
        position:"fixed",
        width:"100%",
        bottom:"0",
        zIndex:"40",
        alignItems:"center",
        backgroundColor:"white",
        borderTop:"1px solid lightgrey",
        justifyContent:"space-around"
}}>
      {routes.map((route) => (
        <MobileItem
          key={route.label}
          href={route.href}
          label={route.label}
          icon={route.icon}
          active={route.active}
          onClick={route.onClick}
        />
      ))}
    </Box>
  );
}
