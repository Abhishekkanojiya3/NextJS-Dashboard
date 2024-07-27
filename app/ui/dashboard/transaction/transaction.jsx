import styles from './transaction.module.css'
import Image from 'next/image'

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
              <Image src="/Next.jsIcon.png" alt="alt" width={40} height={40} className= {styles.userImage} />
              Abhishek
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>12/12/2013</td>
            <td>$3,434</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>

              <Image src="/Next.jsIcon.png" alt="alt" width={40} height={40} className= {styles.userImage} />
              Yuvraj
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Done
              </span>
            </td>
            <td>12/12/2019</td>
            <td>$3,434</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>

              <Image src="/Next.jsIcon.png" alt="alt" width={40} height={40} className= {styles.userImage} />
             Gaurav
             </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>12/12/2003</td>
            <td>$3,43334</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>

              <Image src="/Next.jsIcon.png" alt="alt" width={40} height={40} className= {styles.userImage} />
              Abhishek
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>12/12/2013</td>
            <td>$3,434</td>
          </tr>
         
        </tbody>
      </table>
     
    </div>
  )
}

export default Transaction
