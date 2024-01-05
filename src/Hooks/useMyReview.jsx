import { useQuery } from "@tanstack/react-query";

const useMyReview = (id) => {
  const { data: review = {}, isLoading: loading } = useQuery({
    queryKey: ["review", id],
    queryFn: async () => {
      const res = await fetch(
        `https://travlerz-server-production.up.railway.app/reviews/${id}`
      );
      return res.json();
    },
  });
  return [review, loading];
};

export default useMyReview;
