import { useQuery } from "@tanstack/react-query";
const useMyBooking = (id) => {
  const { data: booking = {}, isLoading: loading } = useQuery({
    queryKey: ["booking", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings/${id}`);
      return res.json();
    },
  });
  return [booking, loading];
};

export default useMyBooking;
