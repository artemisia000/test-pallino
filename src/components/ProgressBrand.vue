<template>
    <div class=" mb-5">
      <div class="row mt-5">
        <div class="racesWrapper">
            <div class="races w-100">
                <div class="w-box-brand">
                    <img src="../assets/image26.png"/>
                </div>
                <div class="w-box-brand">
                    <img src="../assets/image27.png"/>
                </div>
                <div class="w-box-brand">
                    <img src="../assets/image28.png"/>
                </div>
                <div class="w-box-brand">
                    <img src="../assets/image29.png"/>
                </div>
                <div class="w-box-brand">
                    <img src="../assets/image30.png"/>
                </div>
                <div class="w-box-brand">
                    <img src="../assets/image31.png"/>
                </div>
                <div class="w-box-brand">
                    <img src="../assets/image32.png"/>
                </div>
                <div class="w-box-brand">
                    <img src="../assets/image33.png"/>
                </div>             
            </div>
        </div>  
      </div>
    </div>
</template>


<script>
//import gsap from 'gsap';
export default {
  name: 'ProgressBrand',
}

</script>


<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/globals';

.races {
	width:fit-content;
	display:flex;
	flex-wrap:nowrap;
    justify-content: space-around;
}

</style>
