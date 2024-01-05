import { useQuery } from "@tanstack/react-query";
const useReview = () => {
  const {
    refetch,
    data: reviews = {},
    isLoading: loading,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(
        "https://travlerz-server-production.up.railway.app/reviews"
      );
      return res.json();
    },
  });
  return [reviews, refetch, loading];
};

export default useReview;
