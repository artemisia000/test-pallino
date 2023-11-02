<template>
  <div class="hello">
    <div class="menu-container">
      <div class="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="http://marioloncarek.com">About</a>
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
                <ul>
                  <li><a href="#">Sub something</a></li>
                  <li><a href="#">Sub something</a></li>
                  <li><a href="#">Sub something</a></li>
                  <li><a href="#">Sub something</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">News</a>
            <ul>
              <li><a href="#">Today</a></li>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Sport</a></li>
            </ul>
          </li>
          <li><a href="http://marioloncarek.com">Contact</a>
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
import dropMenu from '@/data/navmenu.js'


export default {
  name: 'NavMenu',
  data() {
  return {
    navmenu: dropMenu,
     }
  },
}

</script>

<style scoped lang="scss">

a {
  color: #333;
}

.description {
  width: 80%;
  margin: 50px auto;
}

.menu-container {
  width: 80%;
  margin: 0 auto;
  background: #e9e9e9;
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
    background: #fff;
    color: #333;
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
      background: #e9e9e9;
      padding: 0;
      margin: 0;
      a {
        text-decoration: none;
        padding: 1.5em 3em;
        display: block;
      }
      &:hover {
        background: #f0f0f0;
      }
      > ul {
        display: none;
        width: 100%;
        background: #f0f0f0;
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
