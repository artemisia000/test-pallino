<template>
    <div class="w-container mb-5">
      <div class="row mt-5">    
        <div class="w-title col-12 text-center">
          LOREM IPSUM
        </div>
        <span class="w-decription col-12 text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori. 
        </span>
        <div class="col-12 col-md-4 col-lg-4">
          <div class="box-progress-number">
            <h1 id="counter" ref="myElement">1024</h1>
            <div class="w-back-text">
              <span>At vero eos et accusamus</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <div class="box-progress-number">
            <h1 id="counter">1024</h1>
            <div class="w-back-text">
              <span>At vero eos et accusamus</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <div class="box-progress-number">
            <h1 id="counter">1024</h1>
            <div class="w-back-text">
              <span>At vero eos et accusamus</span>
    
            </div>
          </div>
        </div>
        <div class="col-12 mt-5">     
            <button class="dropdown-toggle w-dropdown m-auto" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
</template>


<script>
// import gsap from 'gsap';
// import progressNumber from '@/progressNumber.js'


export default {
  name: 'ProgressBarNumbers',
 
  // data() {
  //  return {  
  //    prog: progressNumber,
  //   }
  
  // }
}
</script>


<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/globals';
.box-progress-number{
  margin: auto;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  width: 424px;
  height: 204px;
  flex-shrink: 0;
  
  h1{
    font-size: 120px;
    font-weight: 400;
  }

  .w-back-text{
    display: inline-flex;
    padding: 5px 10px;
    align-items: flex-start;
    gap: 10px; 
    background-color: $yellow-color;

    span{
      color: $grey-color;
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px; 
    }
  }

}
</style>
