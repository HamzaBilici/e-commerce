/*import { toast } from "react-toastify";

import { useAppSelector, useAppDispatch } from "../store/hooks";*/

import BannerArea from "../layout/bannerArea";
import Brands from "../layout/brands";
import MainHeroBanner from "../layout/mainHeroBanner";
import BestProducts from "../layout/bestProducts";
import IntroArea from "../layout/introArea";
import ChartArea from "../layout/chartArea";
import FeaturedPostsArea from "../layout/featuredPostsArea";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";

function Home() {
  /* const notify = () => toast("Wow so easy !");
  const count = useAppSelector((state: any) => state.counter.value);*/
  return (
    /*  <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={notify}>Notify !</button>
      <h2>Sayaç: {JSON.stringify(count)}</h2>
    </>*/
    <>
      <Navbar />
      <MainHeroBanner />
      <Brands />
      <BannerArea />
      <BestProducts />
      <IntroArea />
      <ChartArea />
      <FeaturedPostsArea />
      <Footer />
    </>
  );
}

export default Home;
