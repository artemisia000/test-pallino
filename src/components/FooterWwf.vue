<template>
  <div class="row w-footer">
    <div class="col-12 col-md-4 col-lg-3 pe-0 ps-0">
      <div class="w-box-footer">
        <h1>LOREM IPSUM</h1>
        <ul>
          <li>Via decorati al valor civile, 57</li>
          <li>P.Iva: IT 02221111115</li>
          <li>C.F: 80078432222</li>
          <li>Telefono: 01444324</li>
          <li> E-mail: email@email.it - test@test.it</li>
          <li> Sito ufficiale: pallino.it</li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-3 pe-0 ps-0">
      <div class="w-box-footer">
        <ul>
          <li>Voice 1 </li>
          <li>Voice 2 </li>
          <li>Lorem ipsum </li>
          <li>Dolor sit </li>
          <li>Voice 3</li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-3 pe-0 ps-0">
      <div class="w-box-footer">
        <ul>
          <li>Domande frequenti</li>
          <li>Privacy policy</li>
          <li>Termini e condizioni </li>
          <li>Telefono: 01444324</li>
          <li>Centro preferenze cookies</li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-3 pe-0 ps-0">
      <div class="w-box-footer">
        <ul>
          <li><img src="../assets/fb.svg"/>Facebook</li>
          <li><img src="../assets/is.svg"/>Instagram</li>
          <li><img src="../assets/tw.svg"/>Twitter</li>
          <li><img src="../assets/yt.svg"/>You Tube</li>
        </ul>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: 'FooterWwf',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles/variables';

.w-footer{
  background-color: $grey-secondary-color;
  height: 440px;
  padding-bottom: 80px;

  h1{
    color:  $grey-text-color;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    text-transform: uppercase;
  }
}

.w-box-footer{
  padding: 20px;
  text-align: left;
  height: 378px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-bottom: 1px solid $grey-text-color;
  &:nth-child(1),
  &:nth-child(2){
    border-right: 1px solid $grey-text-color;
  }
  
  ul{
    padding-left: 0px;
  }

  ul li{
    color: $grey-text-color;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    list-style: none;

  }
}
</style>
