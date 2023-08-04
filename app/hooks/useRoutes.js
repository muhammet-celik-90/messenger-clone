import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

export default function useRoutes() {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const iconStyle = { height: "24px", width: "24px", flexShrink: "0" };

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: <HiChat style={iconStyle} />,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: <HiUsers style={iconStyle} />,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        href: "#",
        onClick: () => signOut(),
        icon: <HiArrowLeftOnRectangle style={iconStyle} />,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
}
