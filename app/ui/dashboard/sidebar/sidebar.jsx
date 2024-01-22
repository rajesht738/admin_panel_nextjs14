import styles from "./sidebar.module.css";
import {MdAttachMoney, MdDashboard, MdOutlineSettings, MdShoppingBag, MdSupervisedUserCircle} from 'react-icons/md'
const menuItems = [
  {
    title: "Pages",
    list:[
     { title: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard/>,
    },
     { title: "Users",
      path: "/dashboard",
      icon: <MdSupervisedUserCircle/>,
    },
     { title: "Products",
      path: "/dashboard/products",
      icon: <MdShoppingBag/>,
    },
     { title: "Transactions",
      path: "/dashboard/transactions",
      icon: <MdAttachMoney/>,
    },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title:"Revenue",
        path: "/dashboard/revenue",
        icon: <MdAttachMoney/>,
      },
      {
        title:"Revenue",
        path: "/dashboard/revenue",
        icon: <MdAttachMoney/>,
      },
      {
        title:"Revenue",
        path: "/dashboard/revenue",
        icon: <MdAttachMoney/>,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title:"Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings/>,
      },
      {
        title:"Revenue",
        path: "/dashboard/revenue",
        icon: <MdOutlineSettings/>,
      },
      {
        title:"Revenue",
        path: "/dashboard/revenue",
        icon: <MdOutlineSettings/>,
      },
    ],
  }
];

const Sidebar = () => {
  return (
  <div className="sidebar">
  <ul>
  {menuItems.map((cat)=>(
      <li key={cat.title}>{cat.title}</li>
))}
  </ul>
    
  </div>
  );
};

export default Sidebar;