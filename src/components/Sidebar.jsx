import AppNav from './AppNav'
import Logo from './Logo'
import styles from './Sidebar.module.css'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo />
        <AppNav />
        <p>List of citiry</p>

        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy Copyrigth {new Date().getFullYear()} by Worldwise Inc.
            </p>
        </footer>
    </div>
  )
}

export default Sidebar