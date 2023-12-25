import { useQuery } from "@tanstack/react-query";
const useMyBooking = (id) => {
  const { data: booking = {}, isLoading: loading } = useQuery({
    queryKey: ["booking", id],
    queryFn: async () => {
      const res = await fetch(
        `https://travlerz-server-5s80t1gwz-mshipan.vercel.app/bookings/${id}`
      );
      return res.json();
    },
  });
  return [booking, loading];
};

export default useMyBooking;
