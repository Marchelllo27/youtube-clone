import { useEffect, useState, useCallback } from "react";

const useAuthCustomHook = () => {
  const [tokenExpires, setTokenExpires] = useState(null);

  const loginUser = useCallback(() => {
    
  });

  return { tokenExpires };
};
