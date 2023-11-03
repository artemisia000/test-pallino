<template>
  <div class="w-container w-box-filterable mt-5 mb-5">
    <div class="row">
      <h1 class="w-title text-start">FILTERABLE PORTOFOLIO</h1>
      <div class="co-12">
        <ul class="w-menu-filterable">
          <li>ALL</li>
          <li>| NEWS |</li>
          <li>EVENTS</li>
        </ul>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <figure>
          <img src="../assets/image 1.png"/>
          <h3>TIGER</h3>
        </figure>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <figure>
          <img src="../assets/news.png"/>
          <h3>LAST NEWS</h3>
        </figure>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <figure>
          <img src="../assets/panda.png"/>
          <h3>EVENTS</h3>
        </figure>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'FilterableWwf',

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles/globals';

figure{
  width: 100%;
  padding: 20px;
  height: 100%;
  margin: auto;
  position: relative;

  img{
    object-fit: cover;
    width: 100%;
    height: 500px;
  }

  h3{
    position: absolute;
    bottom: 60px;
    left: 60px;
    color: #fff;
    font-size: 50px;
    font-weight: 400;
  }
}

.w-box-filterable{
  height: 750px;
  padding-bottom: 100px;
  border-bottom: 2px solid #000;
}

.w-menu-filterable{
  display: flex;

  li{
    list-style: none;
    line-height: 60px;
    font-size: 22px;
    font-weight: 700;
    color: gray;
    margin-right: 15px;
    &:active{
      color: #000;
    }
    &:focus{
      color: #000;
    }
  }
}

</style>
