import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/Search";
import styles from "@/app/ui/dashboard/product/product.module.css";
import Image from "next/image";
import Link from "next/link";
import { fetchUsers } from "@/app/lib/data";
const UserLists = async ({searchParams}) => {
  const q = searchParams?.q || "";  
  const page = searchParams?.page || 1;
  const {count, users} = await fetchUsers(q, page);
  // console.log('userList',users);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Roles</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        { users.map((user)=> (

       
          <tr key={user._id}>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avator.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
               {user.username}
              </div>
            </td>
            <td>{user.email}</td>
            <td>{user.createdAt?.toString().slice(4, 16)}</td>
            <td>{user.isAdmin ? "Admin" : "client"}</td>
            <td>{user.isActive ? "Active" : 'Passive'}</td>
            <td>
            <div className={styles.buttons}>
              <Link href={`/dashboard/users/${user.id}`}>
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
              </div>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  );
};

export default UserLists;
