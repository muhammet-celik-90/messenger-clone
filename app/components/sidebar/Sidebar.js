import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

async function Sidebar({ children }) {

  const currentUser = await getCurrentUser();
  return (
    <div style={{paddingLeft:"60px"}}>
      <DesktopSidebar currentUser={currentUser} />
      <MobileFooter />
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
