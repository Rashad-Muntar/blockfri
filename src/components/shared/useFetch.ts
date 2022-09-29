import { useEffect, useState } from "react";
import {
  method,
  cat,
  mode,
  credentials,
  contentType,
  redirect,
  referrerPolicy,
} from "../../types";

const useDataFetch = <T,>(
  url: string,
  method?: method,
  mode?: mode,
  cat?: cat,
  credentials?: credentials,
  contentType?: contentType,
  redirect?: redirect,
  referrerPolicy?: referrerPolicy,
 
) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: method,
          mode: mode,
          cache: cat,
          credentials: credentials,
          headers: {
            "Content-Type": "application/json" || contentType,
          },
          redirect: redirect,
          referrerPolicy: referrerPolicy,
        });
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.messages);
      }
    };
    fetchData();
  }, []);
  return { data, error, loading };
};

export default useDataFetch;
