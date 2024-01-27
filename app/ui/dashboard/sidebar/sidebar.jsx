import Image from "next/image";
import MenuLink from "./menuLinks/menuLink";
import styles from "./sidebar.module.css";
import {
  MdAttachMoney,
  MdDashboard,
  MdLogout,
  MdOutlineSettings,
  MdShoppingBag,
  MdSupervisedUserCircle,
} from "react-icons/md";
const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      { title: "Users", path: "/dashboard/users", icon: <MdSupervisedUserCircle /> },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdAttachMoney />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAttachMoney />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdOutlineSettings />,
      },
     
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image priority={false} className={styles.userImage} src="/avator.png" alt="userImage" width="50" height="50" />
        <div className={styles.userDetails}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
        <button className={styles.logout}>
        <MdLogout/>
        Logout
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
