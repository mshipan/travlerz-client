import { useQuery } from "@tanstack/react-query";

const usePackage = () => {
  const { data: packages = [], isLoading: loading } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/packages");
      return res.json();
    },
  });
  return [packages, loading];
};

export default usePackage;
