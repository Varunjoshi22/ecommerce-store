import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true});
    const billboard = await getBillboard("be18a71d-08ea-40a0-bae6-54604ab9657d")
    return ( 
        <div>
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-6">
                    <ProductList title="Featured Products" items={products}/>
                </div>
                </div>
            </Container>
        </div>
     );
}
 
export default HomePage;