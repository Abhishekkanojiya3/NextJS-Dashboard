import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <Search placeholder='Search for a user...'/>
      <Link href="/dashboard/user/add">
      <button className={styles.addButton}>Add New</button>
      </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Created At</td>
          <td>Role</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={styles.user}>
              <Image src="/Next.jsIcon.png" alt="alt" width={40} height={40} className={styles.userImage}/>
              Abhishek
            </div>
          </td>
          <td>Abhi@gmail.com</td>
          <td>13.01.2023</td>
          <td>Admin</td>
          <td>active</td>
          <td>
            <Link href="/">
            <button className={`${styles.button} ${styles.view}`}>View</button>
            </Link>
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>

          </td>
        </tr>
      </tbody>
    </table>
    <Pagination/>
    </div>
  )
}

export default Users
