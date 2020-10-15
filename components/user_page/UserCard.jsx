import { useEffect, useState } from "react";
import api from "../../lib/mock-api";
import styles from "./user-card.module.css";

export default function UserCard({ user_id }) {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [createdAt, setCreatedAt] = useState("");

    useEffect(() => {
        const userInfo = api.getUser(user_id);

        user_id && setName(userInfo.name);
        user_id && setBio(userInfo.bio);
        user_id && setCreatedAt(userInfo.created_at);
    }, [user_id]);

    return (
        <div>
            <h1>This is the User Page for user with id: {user_id} and all their recipes</h1>
            <p>Username: {name}</p>
            <p>Bio: {bio}</p>
            <p>Member Since: {createdAt}</p>
        </div>
    );
}
