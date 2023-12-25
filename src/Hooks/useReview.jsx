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
        "https://travlerz-server-5s80t1gwz-mshipan.vercel.app/reviews"
      );
      return res.json();
    },
  });
  return [reviews, refetch, loading];
};

export default useReview;
