// export  const metadata ={
//   title: 'Home'
// }

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
// import sampleData from "./db/sample-data";


import ProductList from "@/components/ui/shared/product/product-list";
import { getLatestProducts } from "@/lib/Actions/product.action";
const homePage =  async () => {
  const latestProducts =  await getLatestProducts();
console.log("latestProducts",latestProducts);
  return  <>  
  <ProductList data={latestProducts} title="Newest Arrivals" />
    
  </> ;
}
 
export default homePage;