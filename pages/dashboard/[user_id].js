import { useRouter } from 'next/router'
import Layout from '../../components/layouts/DashBoardLayout'
import UserCard from '../../components/user_page/UserCard'
import RecipeList from '../../components/user_page/RecipeList'

export default function User() {
    const router = useRouter()
    const { user_id } = router.query


    return (
        <Layout>
            <UserCard user_id={user_id} />
            <RecipeList user_id={user_id} />
        </Layout>
    )
}

// Server-Side Rendering Test
// export async function getServerSideProps(context) {
//     const api = new MockAPI()
//     const id = await context.params.user_id
//     const data = api.getUser(parseInt(id))

//     console.log("fetched new")

//     return {
//         props: {
//             name: data.name,
//             bio: data.bio,
//             createdAt: data.created_at,
//         }
//     }
// }
