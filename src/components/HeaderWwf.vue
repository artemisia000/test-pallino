<template>
  <div>
    <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    
  </swiper>
 

  </div>

</template>

<script>
import { Swiper , SwiperSlide} from 'swiper/vue'
import 'swiper/scss';


export default {
  name: 'HeaderWwf',
  components: {
    Swiper,
    SwiperSlide,

  },

  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
  
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper {
  width: 600px;
  height: 300px;
}
</style>
