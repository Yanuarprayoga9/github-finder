import { GitHubUser } from "@/types";
import { useQuery } from "@tanstack/react-query";

 const getUserGithubUsername = async (
    userName: string
): Promise<GitHubUser> => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
    return await res.json();
};


const useUsers = (userName:string)=> {
    return useQuery({
        queryKey: ["users", userName],
        queryFn: () => getUserGithubUsername(userName),
    });
};

export { useUsers };
