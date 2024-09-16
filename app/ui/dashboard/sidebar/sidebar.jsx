import { FaHome, FaUserAlt, FaCog, FaFileAlt, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import styles from "./sidebar.module.css"
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import { MdLogout } from 'react-icons/md';

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        icon: <FaFileAlt />,
        path: '/Dashboard',
      },
      {
        title: 'Users',
        icon: <FaChartLine />,
        path: '/Dashboard/users',
      },
      {
        title: 'Products',
        icon: <FaChartLine />,
        path: '/Dashboard/products',
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Profile',
        icon: <FaUserAlt />,
        path: '/Dashboard/profile',
      },
      {
        title: 'Settings',
        icon: <FaCog />,
        path: '/Dashboard/settings',
      },
      {
        title: 'About',
        icon: <FaSignOutAlt />,
        path: '/Dashboard/about',
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.user}>
            <Image className = {styles.userImage} src="/Next.jsIcon.png" alt="alt" width="50" height="50" />
            <div className={styles.userDetails}>
                <span className={styles.username}>Abhishek</span>
                <span className={styles.userTitle}>Administrator</span>
            </div>
        </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => {
            return (
                <li key = {cat.title}>
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map((item) => (
                        <MenuLink item={item} key = {item.title} />
                    )
                    )}
                </li>
            )
        })}
        </ul>
        <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  )
}

export default Sidebar
