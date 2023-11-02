<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-6">
      <div class="">
        <client-only>
  <vimeo-player ref="player" :video-id="859120638"/>
</client-only>	 


      </div>

    </div>
    <div class="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
      <div class="text-start w-box-video">
        <span>Subcategory</span>
        <h1 class="w-title">LOREM IPSUM DOLOR SIT</h1>
        <span class="w-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
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
   
  
  </div>
</template>

<script>



export default {
  name: 'MainWwf',

  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles/variables';
.w-box-video{
  background-color: $grey-color;
  height: 600px;
  padding: 60px;

  h1,span{
    color: #fff;
  }
}

</style>
