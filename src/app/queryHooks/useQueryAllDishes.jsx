import { useQuery } from "react-query";

export const useQueryAllDishes = () => {
  const getDishes = async () => {
    const response = await fetch("https://api.tishy.aitrc.com.np/v1/product");
    const data = await response.json();
    // console.log(data);
    return data;
  };
  return useQuery("dishes", getDishes);
};
