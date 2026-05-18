import BannerArea from "../layout/Home/bannerArea";
import Brands from "../layout/Home/brands";
import MainHeroBanner from "../layout/Home/mainHeroBanner";
import BestProducts from "../layout/Home/bestProducts";
import IntroArea from "../layout/Home/introArea";
import ChartArea from "../layout/Home/chartArea";
import FeaturedPostsArea from "../layout/Home/featuredPostsArea";

function Home() {
  return (
    <>
      <MainHeroBanner />
      <Brands />
      <BannerArea />
      <BestProducts />
      <IntroArea />
      <ChartArea />
      <FeaturedPostsArea />
    </>
  );
}

export default Home;
