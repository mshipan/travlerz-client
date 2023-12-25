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
        "https://travlerz-server-5s80t1gwz-mshipan.vercel.app/tour-guides"
      );
      return res.json();
    },
  });
  return [refetch, guides, loading];
};

export default useGuide;
