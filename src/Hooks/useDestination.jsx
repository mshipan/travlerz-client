import { useQuery } from "@tanstack/react-query";
const useDestination = () => {
  const { data: destinations = [], isLoading: loading } = useQuery({
    queryKey: ["destinations"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/destinations");
      return res.json();
    },
  });
  return [destinations, loading];
};

export default useDestination;
