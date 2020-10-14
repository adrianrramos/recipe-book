import SideBar from "./Sidebar";
import Head from "next/head";
import styles from "./dashboardlayout.module.css";

export default function DashBoardLayout({ children }) {
    return (
        <div>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
                    integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
                    crossorigin="anonymous"
                />
            </Head>

            <main className={styles.main}>
                <SideBar />
                <div className={styles.children}>{children}</div>
            </main>
        </div>
    );
}
