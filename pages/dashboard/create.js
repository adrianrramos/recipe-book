import Layout from '../../components/layouts/DashBoardLayout'
import CreateForm from '../../components/create_page/CreateForm'
import CreateDisplay from '../../components/create_page/CreateDisplay'
import styles from '../../styles/Create.module.css'

export default function Create() {
    return (
        <Layout>
            <div className={styles.container}>
                <CreateForm />
                <CreateDisplay />
            </div>
        </Layout>
    )
}