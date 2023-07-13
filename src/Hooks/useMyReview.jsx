import { useQuery } from "@tanstack/react-query";

const useMyReview = (id) => {
  const { data: review = {}, isLoading: loading } = useQuery({
    queryKey: ["review", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/reviews/${id}`);
      return res.json();
    },
  });
  return [review, loading];
};

export default useMyReview;
