import { UserList } from "../UserList/UserList";
import style from "./style.module.scss"

export const Content = () => {
    return (
        <div className={style.content}>
            <h2>Користувачі</h2>
            <UserList />
        </div>
    );
}