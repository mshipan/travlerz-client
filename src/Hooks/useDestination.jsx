import { useQuery } from "@tanstack/react-query";
const useDestination = () => {
  const { data: destinations = [], isLoading: loading } = useQuery({
    queryKey: ["destinations"],
    queryFn: async () => {
      const res = await fetch(
        "https://travlerz-server.vercel.app/destinations"
      );
      return res.json();
    },
  });
  return [destinations, loading];
};

export default useDestination;
