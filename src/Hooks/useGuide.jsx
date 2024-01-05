import { useQuery } from "@tanstack/react-query";

const useGuide = () => {
  const {
    refetch,
    data: guides = {},
    isLoading: loading,
  } = useQuery({
    queryKey: ["guides"],
    queryFn: async () => {
      const res = await fetch(
        "https://travlerz-server-production.up.railway.app/tour-guides"
      );
      return res.json();
    },
  });
  return [refetch, guides, loading];
};

export default useGuide;
