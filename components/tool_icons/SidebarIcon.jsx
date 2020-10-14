import Link from "next/link";
import styles from "./sidebar-icon.module.css";

export default function SidebarIcon({ children, linkTo }) {
    return (
        <Link href={`${linkTo}`}>
            <div className={styles.border}>{children}</div>
        </Link>
    );
}
