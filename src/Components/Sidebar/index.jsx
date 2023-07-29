import SidebarItem from "./SidebarItem/index";
import { sidebarItemList } from "./SidebarData/index";
const Sidebar = () => {
  return (
    <div className="bg-stone-300 min-h-screen">
      {sidebarItemList.map((currentItem, index) => {
        return <SidebarItem key={index} {...currentItem} />;
      })}
    </div>
  );
};

export default Sidebar;
