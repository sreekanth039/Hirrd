import { useSession } from "@clerk/clerk-react";
import { useState } from "react";


const useFetch =(cb, options = {}) => {

let [data, setData] = useState(undefined); 
let [loading, setLoading] = useState(null); 
let [error, setError] = useState(null);  

  let {session} = useSession();

  const fn = async(...args) =>{
    setLoading(true);
    setError(null);

    try{
      const supabaseAccessToken = await session.getToken({
        template:"supabase",
      });
      const response = await cb(supabaseAccessToken, options, ...args);
      setData(response);
      setError(null);
    }catch(error){
setError(error);
    }finally{
      setLoading(false);
    }
  };
  return {fn, data, loading, error};

}

export default useFetch;