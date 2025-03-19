import { useQuery } from "@tanstack/react-query"

export const getUser = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            return res.json();
        }})
}
