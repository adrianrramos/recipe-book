import SidebarIcon from "../tool_icons/SideBarIcon";
import styles from "./sidebar.module.css";

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <div className={styles.links}>
                    <SidebarIcon linkTo="/dashboard/create">
                        <i className="fas fa-plus"></i>
                    </SidebarIcon>
                    <SidebarIcon linkTo="/dashboard/1">
                        <i className="fas fa-book-open"></i>
                    </SidebarIcon>
                </div>
                <div className={styles.tools}>
                    <SidebarIcon>
                        <i className="fas fa-cog"></i>
                    </SidebarIcon>
                </div>
            </div>
        </div>
    );
}
