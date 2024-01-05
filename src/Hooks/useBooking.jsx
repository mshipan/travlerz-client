import { useQuery } from "@tanstack/react-query";

const useBooking = () => {
  const { data: booking = {}, isLoading: loading } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(
        "https://travlerz-server-production.up.railway.app/bookings"
      );
      return res.json();
    },
  });
  return [booking, loading];
};

export default useBooking;
