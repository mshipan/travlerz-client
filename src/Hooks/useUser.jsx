import { useQuery } from "@tanstack/react-query";

const useUser = (email) => {
  const { data: singleUser = {}, isLoading: loading } = useQuery({
    queryKey: ["singleUser", email],
    queryFn: async () => {
      const res = await fetch(
        `https://travlerz-server-production.up.railway.app/user/${email}`
      );
      return res.json();
    },
  });
  return [singleUser, loading];
};

export default useUser;
