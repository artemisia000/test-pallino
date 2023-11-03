<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg menu-container">
      <div class="w-container d-flex align-items-center">
        <div>
          <img src="../assets/LogoWwf.png" style="width: 40px;height: 40px;"/>         
        </div>
         <button class="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">SERVICES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQS</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                NEWS
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>           
          </ul>
          <form class="d-flex" role="search">
            <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
            <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
          </form>
        </div>
        <a class=""  href="#">
          <img src="../assets/Icons-2.png" class=" d-block"/>
        </a>
        <a class=""  href="#">
          <img src="../assets/Icons-3.png" class="ms-4  d-none d-md-block"/>
        </a>
      </div>
    </nav>
  </div> 
</template>

<script>
//import dropMenu from '@/data/navmenu.js'


export default {
  name: 'NavMenu',
  // data() {
  // return {
  //   navmenu: dropMenu,
  //    }
  // },
}

</script>

<style scoped lang="scss">

.menu-container {
  margin: 0 auto;
  //background: rgba(0,0,0,0.2);
  position: absolute;
  top: 0;
  left:0;
  right: 0;
  z-index:10;
}

.nav-item a{
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
}

.nav-item{
  margin: 0px 1.5rem;
  padding: 1rem;
}

.nav-item:hover{
  border-bottom: 2px solid #fff;
}

</style>
