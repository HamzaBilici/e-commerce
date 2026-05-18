import ProductList from "../../components/productList";



const ProductListArea=()=>{
    return(<>
    <section>
        <ProductList limit={6}/>
    </section>
    </>)
}

export default ProductListArea;