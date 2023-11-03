<template>

      <div class="row">
        <!-- section player -->
        <div class="col-12 col-md-6 col-lg-6 p-0">
          <div class="w-box-img">
            <img src="../assets/MaskGroup.png"/>

            <!-- <client-only>
              <vimeo-player ref="player" :video-id="videoID" @ready="onReady" :player-height="height">
                </vimeo-player>
            </client-only>	  -->
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center p-0">
          <div class="text-start w-box-video">
            <span>Subcategory</span>
            <h1 class="w-title">LOREM IPSUM DOLOR SIT</h1>
            <span class="w-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
            <div class="col-12 mt-5">     
              <button class="dropdown-toggle w-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                LOREM IPSUM
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">FJFJF</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
          </div>
          </div>
      </div> 
      <div class="w-container">
      <!-- section main -->
      <div style="border-top: 2px solid #000; border-bottom: 2px solid #000;" class="p-5 mt-5 mb-5 row">
        <div class="col-12 col-md-6 col-lg-6">
          <div class="text-start w-box-text-socio">
            <span>Subcategory</span>
            <h1 class="w-title">LOREM IPSUM </h1>
            <span class="w-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </span>    
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="w-sticky">
            <img src="../assets/image 1.png"/>
          </div>
        </div>
      </div>
    </div>
  <!-- section autoscroll text -->
  <marquee direction="left"
             behavior="slide"
             scrollmount="10"
             class="w-text-scroll">
        LOREM IPSUM - LOREM IPSUM - LOREM IPSUM - LOREM IPSUM - LOREM IPSUM - LOREM IPSUM
    </marquee>
</div>
</template>


<script>


export default {
  name: 'MainWwf',
//   data() {
//     return {
//         videoID: '141851770',
//         height: 600,
//         options: {},
//         playerReady: false,
//     }
// },
// methods: {
//     onReady() {
//         this.playerReady = true
//     },
//     play () {
//         this.$refs.player.play()
//     },
//     stop () {
//         this.$refs.player.stop()
//     }
// },
//   props: {
//     msg: String
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles/variables';
.w-box-video{
  background-color: $grey-color;
  height: 600px;
  width: 100%;
  padding: 60px;

  h1,span{
    color: #fff;
  }
}

.w-text-scroll{
  background-color: #000;
  color: #fff;
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase; 
  padding: 11px 0px;
}


.w-box-img {
  width: 100%;
  height: 600px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.w-box-text-socio{
  height: 700px;
  width:500px;
}

.w-sticky{
  position: -webkit-sticky;
  position: sticky;
  top: 0;

}
</style>
