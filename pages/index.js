import tw from "tailwind-styled-components"
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { promotions } from '../constants'


export default function Page() {
  return (
    <Container>
      <HeaderContainer>
        <PromotionContainer
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {promotions.map((promotion, index) => (
            <Slide key={index}>
              <ImagePromotion src={promotion.img} />
            </Slide>
          ))}
        </PromotionContainer>
        <PopularContainer>
          ddd
        </PopularContainer>
      </HeaderContainer>
      <div>
        ggggg11


      </div>
    </Container>
  )
}

const Container = tw.div`
  flex flex-col gap-8
`
const HeaderContainer = tw.div`
  flex flex-col lg:flex-row gap-12
`

const PromotionContainer = tw(Swiper)`
  w-full lg:w-3/4 rounded h-96 shadow-lg text-mid
`

const Slide = tw(SwiperSlide)`
  flex justify-center w-full
`

const PopularContainer = tw.div`
  w-1/4 p-4 border border-mid rounded
`

const ImagePromotion = tw(Image)`
  block object-cover
`