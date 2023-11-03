<template>
  <div class="hello">
    <div class="menu-container">
      <div class="menu d-flex">
        <img src="../assets/LogoWwf.png"/>
        <ul class="d-flex justify-content-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a>
            <ul>
              <li><a href="#">School</a>
                <ul>
                  <li><a href="#">Lidership</a></li>
                  <li><a href="#">History</a></li>
                  <li><a href="#">Locations</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </li>
              <li><a href="#">Study</a>
                <ul>
                  <li><a href="#">Undergraduate</a></li>
                  <li><a href="#">Masters</a></li>
                  <li><a href="#">International</a></li>
                  <li><a href="#">Online</a></li>
                </ul>
              </li>
              <li><a href="#">Research</a>
                <ul>
                  <li><a href="#">Undergraduate research</a></li>
                  <li><a href="#">Masters research</a></li>
                  <li><a href="#">Funding</a></li>
                </ul>
              </li>
              <li><a href="#">Something</a>
                
              </li>
            </ul>
          </li>
          <li><a href="#">News</a>
            
          </li>
          <li><a href="#">Contact</a>
            <ul>
              <li><a href="#">School</a>
                <ul>
                  <li><a href="#">Lidership</a></li>
                  <li><a href="#">History</a></li>
                  <li><a href="#">Locations</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </li>
              <li><a href="#">Study</a>
                <ul>
                  <li><a href="#">Undergraduate</a></li>
                  <li><a href="#">Masters</a></li>
                  <li><a href="#">International</a></li>
                  <li><a href="#">Online</a></li>
                </ul>
              </li>
              <li><a href="#">Study</a>
                <ul>
                  <li><a href="#">Undergraduate</a></li>
                  <li><a href="#">Masters</a></li>
                  <li><a href="#">International</a></li>
                  <li><a href="#">Online</a></li>
                </ul>
              </li>
              <li><a href="#">Empty sub</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
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

.menu{
  width: 80%;
  margin: auto;

  img{
    width: 40px;
  }
}

a {
  color: #fff;
}

.description {
  width: 80%;
  margin: 50px auto;
}

.menu-container {
  width: 100%;
  margin: 0 auto;
  background: rgba(0,0,0,0.2);
  position: absolute;
  top: 0;
  left:0;
  right: 0;
  z-index:10;
}

.menu-mobile {
  display: none;
  padding: 20px;
  &:after {
    content: "\f394";
    font-family: "Ionicons";
    font-size: 2.5rem;
    padding: 0;
    float: right;
    position: relative;
    top: 50%;
    transform: translateY(-25%);
  }
}

.menu-dropdown-icon {
  &:before {
    content: "\f489";
    font-family: "Ionicons";
    display: none;
    cursor: pointer;
    float: right;
    padding: 1.5em 2em;
    color: #fff;
  }
}

.menu {
  > ul {
    margin: 0 auto;
    width: 100%;
    list-style: none;
    padding: 0;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    &:before,
    &:after {
      content: "";
      display: table;
    }
    &:after {
      clear: both;
    }
    > li {
      float: left;
      padding: 0;
      margin: 0;
      a {
        text-decoration: none;
        padding: 1.5em 3em;
        display: block;
      }
      &:hover {
        border-bottom: 2px solid #f0f0f0;
      }
      > ul {
        display: none;
        width: 100%;
        padding: 20px;
        position: absolute;
        z-index: 99;
        left: 0;
        margin: 0;
        list-style: none;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        &:before,
        &:after {
          content: "";
          display: table;
        }
        &:after {
          clear: both;
        }
        > li {
          margin: 0;
          padding-bottom: 0;
          list-style: none;
          width: 25%;
          background: none;
          float: left;
          a {
            color: #777;
            padding: .2em 0;
            width: 95%;
            display: block;
            border-bottom: 1px solid #ccc;
          }
          > ul {
            display: block;
            padding: 0;
            margin: 10px 0 0;
            list-style: none;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            &:before,
            &:after {
              content: "";
              display: table;
            }
            &:after {
              clear: both;
            }
            > li {
              float: left;
              width: 100%;
              padding: 10px 0;
              margin: 0;
              font-size: .8em;
              a {
                border: 0;
              }
            }
          }
        }
        &.normal-sub {
          width: 300px;
          left: auto;
          padding: 10px 20px;
          > li {
            width: 100%;
            a {
              border: 0;
              padding: 1em 0;
            }
          }
        }
      }
    }
  }
}


@media only screen and (max-width: 959px) {
  .menu-container {
    width: 100%;
  }
  .menu-mobile {
    display: block;
  }
  .menu-dropdown-icon {
    &:before {
      display: block;
    }
  }
  .menu {
    > ul {
      display: none;
      > li {
        width: 100%;
        float: none;
        display: block;
        a {
          padding: 1.5em;
          width: 100%;
          display: block;
        }
        > ul {
          position: relative;
          &.normal-sub {
            width: 100%;
          }
          > li {
            float: none;
            width: 100%;
            margin-top: 20px;
            &:first-child {
              margin: 0;
            }
            > ul {
              position: relative;
              > li {
                float: none;
              }
            }
          }
        }
      }
    }
    .show-on-mobile {
      display: block;
    }
  }
}

</style>
