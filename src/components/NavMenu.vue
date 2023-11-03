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


// .menu{
//   width: 80%;
//   margin: auto;

//   img{
//     width: 40px;
//     height: 40px;
//   }
// }

// a {
//   color: #fff;
// }

// .description {
//   width: 80%;
//   margin: 50px auto;
// }

// .menu-container {
//   width: 100%;
//   margin: 0 auto;
//   background: rgba(0,0,0,0.2);
//   position: absolute;
//   top: 0;
//   left:0;
//   right: 0;
//   z-index:10;
// }

// .menu-mobile {
//   display: none;
//   padding: 20px;
//   &:after {
//     content: "\f394";
//     font-family: "Ionicons";
//     font-size: 2.5rem;
//     padding: 0;
//     float: right;
//     position: relative;
//     top: 50%;
//     transform: translateY(-25%);
//   }
// }

// .menu-dropdown-icon {
//   &:before {
//     content: "\f489";
//     font-family: "Ionicons";
//     display: none;
//     cursor: pointer;
//     float: right;
//     padding: 1.5em 2em;
//     color: #fff;
//   }
// }

// .menu {
//   > ul {
//     margin: 0 auto;
//     width: 100%;
//     list-style: none;
//     padding: 0;
//     position: relative;
//     -webkit-box-sizing: border-box;
//     -moz-box-sizing: border-box;
//     box-sizing: border-box;
//     &:before,
//     &:after {
//       content: "";
//       display: table;
//     }
//     &:after {
//       clear: both;
//     }
//     > li {
//       float: left;
//       padding: 0;
//       margin: 0;
//       a {
//         text-decoration: none;
//         padding: 1.5em 3em;
//         display: block;
//       }
//       &:hover {
//         border-bottom: 2px solid #f0f0f0;
//       }
//       > ul {
//         display: none;
//         width: 100%;
//         padding: 20px;
//         position: absolute;
//         z-index: 99;
//         left: 0;
//         margin: 0;
//         list-style: none;
//         -webkit-box-sizing: border-box;
//         -moz-box-sizing: border-box;
//         box-sizing: border-box;
//         &:before,
//         &:after {
//           content: "";
//           display: table;
//         }
//         &:after {
//           clear: both;
//         }
//         > li {
//           margin: 0;
//           padding-bottom: 0;
//           list-style: none;
//           width: 25%;
//           background: none;
//           float: left;
//           a {
//             color: #777;
//             padding: .2em 0;
//             width: 95%;
//             display: block;
//             border-bottom: 1px solid #ccc;
//           }
//           > ul {
//             display: block;
//             padding: 0;
//             margin: 10px 0 0;
//             list-style: none;
//             -webkit-box-sizing: border-box;
//             -moz-box-sizing: border-box;
//             box-sizing: border-box;
//             &:before,
//             &:after {
//               content: "";
//               display: table;
//             }
//             &:after {
//               clear: both;
//             }
//             > li {
//               float: left;
//               width: 100%;
//               padding: 10px 0;
//               margin: 0;
//               font-size: .8em;
//               a {
//                 border: 0;
//               }
//             }
//           }
//         }
//         &.normal-sub {
//           width: 300px;
//           left: auto;
//           padding: 10px 20px;
//           > li {
//             width: 100%;
//             a {
//               border: 0;
//               padding: 1em 0;
//             }
//           }
//         }
//       }
//     }
//   }
// }


// @media only screen and (max-width: 959px) {
//   .menu-container {
//     width: 100%;
//   }
//   .menu-mobile {
//     display: block;
//   }
//   .menu-dropdown-icon {
//     &:before {
//       display: block;
//     }
//   }
//   .menu {
//     > ul {
//       display: none;
//       > li {
//         width: 100%;
//         float: none;
//         display: block;
//         a {
//           padding: 1.5em;
//           width: 100%;
//           display: block;
//         }
//         > ul {
//           position: relative;
//           &.normal-sub {
//             width: 100%;
//           }
//           > li {
//             float: none;
//             width: 100%;
//             margin-top: 20px;
//             &:first-child {
//               margin: 0;
//             }
//             > ul {
//               position: relative;
//               > li {
//                 float: none;
//               }
//             }
//           }
//         }
//       }
//     }
//     .show-on-mobile {
//       display: block;
//     }
//   }
// }

</style>
