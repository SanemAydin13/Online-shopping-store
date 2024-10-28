// import useFetch from "../hooks/useFetch";

// export interface IProduct {
//   images: any;
//   title: string | undefined;
//   id: number;
//   name: string;
//   price: number;
//   unit: number| null;
//   availabilityStatus: string
// }

// interface IProductResponse {
//   products: IProduct[];
// }

// export const getProducts = async () => {
//   try {
//     // const res = await useFetch("https://dummyjson.com/products");
//     const data = res.data as IProductResponse;
//     console.log(data);
//     if (data == null || data.products == null)
//       throw new Error("missing product info");
//     return data.products;
//   } catch (err) {
//     if (err instanceof Error)
//       throw new Error("Error in fetching products: " + err.message);
//     return [];
//   }
// };

