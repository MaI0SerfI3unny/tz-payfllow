import { motion } from "framer-motion";
import style from "./style.module.scss"

export const Sidebar = () => {
    return (
        <motion.aside
            className={style.sidebar}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.25, ease: "easeOut" }}>
            <div>
                <h2>Sidebar</h2>
                <p>Зміст сайдбара...</p>
            </div>
        </motion.aside>
    );
}