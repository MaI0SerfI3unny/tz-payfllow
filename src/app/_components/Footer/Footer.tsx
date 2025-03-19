import style from "./style.module.scss"

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <p>© {new Date().getFullYear()} My App</p>
        </footer>
    );
}