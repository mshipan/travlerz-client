import { useQuery } from "@tanstack/react-query";

const usePackage = () => {
  const { data: packages = [], isLoading: loading } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await fetch("https://travlerz-server.vercel.app/packages");
      return res.json();
    },
  });
  return [packages, loading];
};

export default usePackage;
