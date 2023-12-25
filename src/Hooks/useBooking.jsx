import { useQuery } from "@tanstack/react-query";

const useBooking = () => {
  const { data: booking = {}, isLoading: loading } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(
        "https://travlerz-server-5s80t1gwz-mshipan.vercel.app/bookings"
      );
      return res.json();
    },
  });
  return [booking, loading];
};

export default useBooking;
