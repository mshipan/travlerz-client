import { useQuery } from "@tanstack/react-query";

const useGuide = () => {
  const {
    refetch,
    data: guides = {},
    isLoading: loading,
  } = useQuery({
    queryKey: ["guides"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/tour-guides");
      return res.json();
    },
  });
  return [refetch, guides, loading];
};

export default useGuide;
