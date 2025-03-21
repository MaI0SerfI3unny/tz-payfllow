import { useState } from "react";
import style from "./style.module.scss"
import { useGetUser } from "@/app/quires/getUser";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export const UserList = () => {
    const { data: users } = useGetUser();
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <div className={style.userList}>
            {users?.map((user: User) => (
                <div key={user.id} className={style.userListItem}>
                    <div className={style.userListItemInfo}>
                        <p>{user.name}</p>
                        <button 
                            className={style.userListItemInfoToggle}
                            onClick={() => setExpanded(expanded === user.id ? null : user.id)}>
                            Показати деталі
                        </button>
                    </div>
                    {expanded === user.id && (
                        <div className={style.userListItemInfoDetails}>
                            <p>Email: {user.email}</p>
                            <p>Телефон: {user.phone}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
