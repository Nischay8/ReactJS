import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

import Spinner from "../../ui/Spinner";

function CabinTables2() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;
  return <div>Table</div>;
}

export default CabinTables2;
