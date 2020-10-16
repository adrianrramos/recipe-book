import { useEffect, useState } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);
import api from "../../lib/mock-api";
import styles from "./user-card.module.css";

export default function UserCard({ user_id }) {
    const [name, setName] = useState("");
    const [pfp, setPfp] = useState("");
    const [bio, setBio] = useState("");
    const [createdAt, setCreatedAt] = useState("");

    useEffect(() => {
        const userInfo = api.getUser(user_id);

        user_id && setName(userInfo.name);
        user_id && setPfp(userInfo.profile_pic);
        user_id && setBio(userInfo.bio);
        user_id && setCreatedAt(dayjs(userInfo.created_at).fromNow());
    }, [user_id]);

    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img src={pfp} />
            </div>
            <div className={styles.userDetails}>
                <p>{name}</p>
                <p>"{bio}"</p>
                <p>Joined {createdAt}</p>
            </div>
        </div>
    );
}
