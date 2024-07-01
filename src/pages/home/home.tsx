import { Wrap, WrapItem } from "@chakra-ui/react";
import Container from "@/components/container";
import AdsContainer from "./components/adsContainer";
import ImgAds1 from "@/assets/image/Ads1.png";
import ImgAds2 from "@/assets/image/Ads2.png";

const Home = () => {
  return (
    <Container>
      <Wrap justify="center">
        <WrapItem minWidth="600px" maxWidth="800px" flex="1">
          <AdsContainer
            img={ImgAds1}
            heading="The Best Platform for Car Rental"
            text="Ease of doing a car rental safely and reliably. Of course at a low price."
          />
        </WrapItem>
        <WrapItem minWidth="600px" maxWidth="800px" flex="1">
          <AdsContainer
            img={ImgAds2}
            heading="Easy way to rent a car at a low price"
            text="Providing cheap car rental services and safe and comfortable facilities."
            bgColorButton="#54A6FF"
            hoverBgColorButton="#4991E0"
          />
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export { Home };
export default Home;
