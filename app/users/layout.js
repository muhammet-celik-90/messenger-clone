import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

export default async function UsersLayout({ children }) {
  const users = await getUsers();

  return (
    <Sidebar>
      <div style={{display:"flex", flexDirection:"row"}}>
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}
