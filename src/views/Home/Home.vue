<template>
  <div>
    <div class="header-wrapper">
      <div class="header">
        <img  class="back-btn" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURUdwTPr7//n6//n8//j5//b7//n6//j6//z8//r6//r7//r7//n7//j+//f///////////n7//z9//v8//j6/yQP2FkAAAAQdFJOUwCMVDnWGcf4E+eybaAiCgYd2rI6AAABY0lEQVRYw+2W25aDIAxFFSmgoi2Q///WkoDa8QZT+sjxza5sQi7HNk1VVVVSij+K4pmEEsBzACgBdD0UAVoJJYCJA5QARgklACV8pCGB+qZ5WD3jUMao75pnfLz1co4LMeix+2fzYjgRDBj/RvJ2ym5eOP6FIoKJ9eQsr3lLuPUPEZxZGLzLaF6MDxkgwbqNIXWqeRT/WmUDIuaBv4v5EsC3+B0iQCKivyTMA9XPfkRHhF3vggR+N0GHBHZ3oSRu6qCGYwY2phAQSJDsthHOXmYQCL4Mt6MgMAd7SGBtCBLGxDCut/CxvZeMc71WkifWgdvtXNrGeWLt0G/bAYmJfOptFz7WucPcwjjotCUs2/jHD1Qraa5Td6CGRj/YGcpDUAZyzrFFOuzgSJr2iuUYszj3xBF3Rme7y4krI0Fk+9uZrbeQUcVlQ0+/C+J+mjM+HL0s/N/ASgGNKAVMTVVVVdXv9QZ5USpB3dZraQAAAABJRU5ErkJggg==">
        <button type="button" class="rules-btn" @click="showDialog">RULES</button>
      </div>
    </div>

    <div class="body-wrapper">
      <div class="body">
        <div class="daily-dividend box-basic">
          <div class="title">
            Daily Dividend
          </div>
          <div class="daily-bg">
            <img class="daily" src="../../assets/img/daily.jpg"/>
            <span class="daily-info1">Yesterday's dividend<br/>Per Lucky Fish</span>
            <span class="daily-money">$289.19</span>
            <span class="daily-info2">Accumulated<br/>dividends</span>
            <span class="daily-info3">Number <br/>of users</span>
            <span class="daily-total">$12289.00</span>
            <span class="user-num">100</span>
            <button type="button" class="daily-btn">Get</button>
          </div>
          
          <img class="bottom-left" src="../../assets/img/small-circle.png"/>
          <img class="bottom-left-bind" src="../../assets/img/bind.png"/>
          <img class="bottom-right" src="../../assets/img/small-circle.png"/>
          <img class="bottom-right-bind" src="../../assets/img/bind.png"/>
        </div>
        <div class="my-luckey-fish box-basic">
          <div class="title">
            My Lucky Fish
          </div>
          <div class="title-num">
            0
          </div>
          
          <img class="top-left" src="../../assets/img/small-circle.png"/>
          <img class="top-left-bind" src="../../assets/img/bind.png"/>
          <img class="top-right" src="../../assets/img/small-circle.png"/>
          <img class="top-right-bind" src="../../assets/img/bind.png"/>

          <div class="my-luckey-bg">
            <div class="luckey-today">
              Today‘s dividens
              <div style="float: right;color: #3C9C07;">$0</div>
            </div>
            <div class="luckey-cumulative">
              Cumulative dividens
              <div style="float: right;color: #3C9C07;">$0</div>
            </div>
          </div>

          <img class="bottom-left" src="../../assets/img/small-circle.png"/>
          <img class="bottom-left-bind" src="../../assets/img/bind.png"/>
          <img class="bottom-right" src="../../assets/img/small-circle.png"/>
          <img class="bottom-right-bind" src="../../assets/img/bind.png"/>
        </div>
        <div class="my-fortune-fish box-basic">
          <img class="top-left" src="../../assets/img/small-circle.png"/>
          <img class="top-left-bind" src="../../assets/img/bind.png"/>
          <img class="top-right" src="../../assets/img/small-circle.png"/>
          <img class="top-right-bind" src="../../assets/img/bind.png"/>
          
          <div class="title">
            My Fortune Fish
          </div>

          <div class="my-fortune-bg">
            <div class="wisdom-wrapper">
              <img src="../../assets/img/wisdom1.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">wisdom</span>
            </div>
            <div class="wisdom-wrapper">
              <img src="../../assets/img/wisdom2.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">wisdom</span>
            </div>
            <div class="wisdom-wrapper">
              <img src="../../assets/img/wisdom3.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">wisdom</span>
            </div>
            <div class="wisdom-wrapper">
              <img src="../../assets/img/wisdom4.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">wisdom</span>
            </div>
            <div class="wisdom-wrapper">
              <img src="../../assets/img/wisdom5.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">wisdom</span>
            </div>

            <button type="button" class="wisdom-btn">Merge Fortune Fish</button>
          </div>

        </div>
        <div class="how-to-get box-basic">
          <img class="how-to-get-img" src="../../assets/img/how-to-get.png"/>
          <span class="how-title">How to get lucky fish</span>
          <div class="luckey-title">
            Lucky Fish
          </div>
          <div class="how-bg">
            <div class="how-fish">
              <img src="../../assets/img/how-fish.png" class="how-fish-img"/>
              <br/>
              <span class="how-fish-lv">lv.5</span>
            </div>
            <div class="how-fish-add">
              +
            </div>
            <div class="how-fish">
              <img src="../../assets/img/how-fish.png" class="how-fish-img"/>
              <br/>
              <span class="how-fish-lv">lv.5</span>
            </div>
            <div class="how-fish-add">
              =
            </div>
            <div class="how-fish">
              <img src="../../assets/img/how-fish.png" class="how-fish-img"/>
              <br/>
              <span class="how-fish-lv">lv.5</span>
            </div>

            <div class="how-info1">
              Mergetwo LV50.50 <br/> XXXXXxxxxxxxx  Lucky Fish
            </div>
          </div>
          <div class="fortune-title">
            Fortune Fish
          </div>

          <div class="how-fortune-bg">
            <div class="wisdom-wrapper">
              <img src="../../assets/img/how-fish.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">wisdom</span>
            </div>
            <div class="wisdom-wrapper">
              <img src="../../assets/img/how-fish.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">wisdom</span>
            </div>
            <div class="wisdom-wrapper">
              <img src="../../assets/img/how-fish.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">wisdom</span>
            </div>
            <div class="wisdom-wrapper">
              <img src="../../assets/img/how-fish.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">wisdom</span>
            </div>
            <div class="wisdom-wrapper">
              <img src="../../assets/img/how-fish.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">wisdom</span>
            </div>
            <div class="how-info1">
              Mergetwo LV50.50 XXXXXxxxxxxxx<br/>  <span style="color: #E0741C">wisdomxxxxxxxxxxxxxxxx</span>
            </div>
            <div class="how-info2">
              Mergetwo LV50.50 XXXXXxxxxxxxx<br/>  wisdomxxxxxxxxxxxxxxxx
            </div>
          </div>
        </div>
        <div class="list box-basic">
          <div class="list-title">
            <div class="dot1">
              </div> Lucky Fish<div class="dot2">
            </div>
          </div>
          <div class="more">
            more&nbsp;>
          </div>
          <div class="table-header">
            <div class="header-item">
              User ID
            </div>
            <div class="header-item">
              Amount
            </div>
            <div class="header-item">
              Date
            </div>
            <div class="header-item">
              Share
            </div>
          </div>
          <div class="list-wrapper">
            <div 
              :id="'ID'+(index+1).toString()"
              class="table-body" 
              v-for="(item, index) in dataList" 
              :key="item.id"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchEnd="handleTouchEnd"
            >
              <div class="body-item">
                {{item.userId}}
              </div>
              <div class="body-item">
                {{item.amount}}
              </div>
              <div class="body-item">
                {{item.time.split(' ')[0]}}
              </div>
              <div class="body-item">
                {{item.share}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="dialog" class='popContainer'>
      <div class="img">
        <img class="close-img" src="../../assets/img/close.png" alt="" @click="hideDialog">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      startY: 0,
      timer: null,
      touchStatus: false,
      dialog: false,
      dataList: [
        {
          id: "1", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "201"
        },
        {
          id: "2", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "202"
        },
        {
          id: "3", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "203"
        },
        {
          id: "4", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "204"
        },
        {
          id: "5", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "205"
        },
        {
          id: "6", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "206"
        },
        {
          id: "7", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "207"
        },
        {
          id: "8", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "208"
        },
        {
          id: "9", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "209"
        },
        {
          id: "10", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "210"
        },
        {
          id: "11", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "211"
        },
        {
          id: "12", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "212"
        },
        {
          id: "13", 
          userId: "2308501*****509", 
          amount: "1", 
          time: "2020-12-01 00:00:00.000000", 
          share: "213"
        }
      ]
    }
  },
  methods: {
    handleTouchEnd () {
      this.touchStatus = false
    },
    handleTouchMove (e) {
      console.log(e)
      if (this.touchStatus) {
        const startY = document.getElementById('ID1').offsetTop
        const touchY = e.touches[0].clientY
        console.log(startY)
        console.log(touchY)
        // if (this.timer) {
        //   clearTimeout(this.timer)
        // }
        // this.timer = setTimeout(() => {
        //   const touchY = e.touches[0].clientY - 79
        //   const index = Math.floor((touchY - this.startY) / 20)
        //   if (index >= 0 && index < this.letters.length) {
        //     this.$emit('change', this.letters[index])
        //   }
        // }, 16)
      }
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    doLoadMore() {
      console.log('LoadMore')
    },
    showDialog() {
      this.dialog = true
    },
    hideDialog() {
      this.dialog = false
    },
  }
}
</script>

<style lang="stylus" scoped>
  .popContainer
    z-index: 10
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    .img
      z-index: 11
      position: relative
      background-image: url(../../assets/img/rule.png)
      background-repeat: no-repeat
      -moz-background-size:100% 100% 
      background-size: 100%
      margin: 0 auto
      width: 100%;
      height: 100%;
      object-fit: contain
      .close-img
        z-index: 11
        cursor: pointer
        display: inline-block
        margin-left: 90vw
        margin-top: 22vw
        width: 7vw
        height: 7vw;
        object-fit: contain
  .header-wrapper
    height: 29vw
    background-color: #CF703A
    z-index: 0
    .header
      position: relative
      height: 29vw
      width: 100%
      background-image: url(../../assets/img/header.png)
      -moz-background-size:100% 100% 
      background-size:100% 100%
      z-index: 1
      opacity: 0.9
      .back-btn
        position: absolute
        left: 2.4vw
        top: 1vw
        width: 8vw
      .rules-btn
        position: absolute
        top: 2.9vw
        right: 0
        width: 15vw
        height: 5vw
        background: rgba(174, 95, 46, 1);
        border: 0.03rem solid #F6A264;
        border-radius: 0.14rem 0rem 0rem 0.14rem;
        line-height: 0.3rem;
        color: #FFFFFF;
        font-size: 0.18rem;
        font-family: Arial Rounded MT Bold;
        font-weight: 00;         
  .body-wrapper
    height: 405vw
    background-color: #FFC415
    .body
      border-radius: 0.25rem 0.25rem 0 0
      background: #ED7372
      height: 405vw
      box-shadow: 0 0.04rem 0 0 #F77F7E;
      padding-top: 5vw
      .box-basic
        position: relative 
        width: 94.5vw
        background: #FFFFFF
        box-shadow:  0px 5px 0px 0px #F7DAB0
        border-radius: 15px
        z-index: 3
      .daily-bg
        position: relative 
        background-image: url(../../assets/img/daily-bg.png)
        -moz-background-size:100% 100% 
        background-size:100% 100%
        top: -8vw
        left: 0.4vw
        width: 94vw
        height: 71vw
        .daily
          position: absolute
          width: 1.5rem
          top: 23vw
          left: 8vw
        .daily-info1
          position: absolute
          font-size: 3vw;
          font-family: Arial Rounded MT Bold;
          font-weight: 400;
          top: 19vw
          left: 40vw
          text-align: center
        .daily-money
          position: absolute
          font-size: 8vw;
          font-family: Arial Rounded MT Bold
          font-weight: bold
          top: 26vw
          left: 40vw
          text-align: center
          color: #F66E00
        .daily-info2
          position: absolute     
          font-size: 0.1vw;
          font-family: HelveticaNeue;
          font-weight: 400;
          top: 37vw
          left: 40vw
          text-align: center
          color: #565656;
        .daily-info3
          position: absolute     
          font-size: 0.1vw;
          font-family: HelveticaNeue;
          font-weight: 400;
          top: 37vw
          left: 65vw
          text-align: center
          color: #565656;
        .daily-total
          position: absolute     
          font-size: 4vw;
          font-family: Arial Rounded MT Bold
          font-weight: 400;
          top: 44vw
          left: 40vw
          text-align: center
          color: #F66E00
        .user-num
          position: absolute     
          font-size: 4vw;
          font-family: Arial Rounded MT Bold
          font-weight: 400;
          top: 44vw
          left: 67vw
          text-align: center
          color: #F66E00
        .daily-btn
          display: inline-block
          position: absolute
          top: 49vw
          left: 31vw
          width: 30vw
          height: 7vw
          background: #5FCD4C     
          border: 1vw solid #69E25E;
          box-shadow: 0px 1vw 0px 0.1vw #408B46
          border-radius: 14px;
          font-size: 3.8vw;
          font-family: Arial Rounded MT Bold;
          font-weight: 400;
          color: #FFFFFF;
      .my-luckey-bg
        position: relative 
        background-image: url(../../assets/img/myluckey-bg.png)
        -moz-background-size:100% 100% 
        background-size:100% 100%
        bottom: -10vw
        left: 2vw
        width: 90.5vw
        height: 20vw
        .luckey-today
          width: 78.5vw
          height: 2vw
          padding: 4vw 0
          margin: 0 auto
          font-size: 3.4vw;
          font-family: Arial Rounded MT Bold;
          font-weight: 400;
          color: #565656;
          line-height: 2vw;
          border-bottom: 0.5vw dashed #FDD7A0
        .luckey-cumulative
          width: 78.5vw
          height: 2vw
          padding: 4vw 0
          margin: 0 auto
          font-size: 3.4vw;
          font-family: Arial Rounded MT Bold;
          font-weight: 400;
          color: #565656;
          line-height: 2vw;
      .my-fortune-bg
        position: relative 
        background-image: url(../../assets/img/myluckey-bg.png)
        -moz-background-size:100% 100% 
        background-size:100% 100%
        bottom: -10vw
        left: 2vw
        width: 90.5vw
        height: 25vw
        .wisdom-wrapper
          float: left
          height: 16vw
          padding: 3vw 2vw
          .wisdom-img
            height: 100%
          .wisdom
            font-size: 3.5vw;
            font-family: Arial Rounded MT Bold;
            font-weight: 400;
            color: #565656;
            line-height: 3vw;
        .wisdom-btn
          color: #fff
          width: 45vw;
          height: 8vw;
          background: #5FCD4D;
          box-shadow: 0px 1vw 0px 0.2vw #408B46
          border-radius: 2vw;
          position: absolute
          left: 22vw
          bottom: -10vw
      .daily-dividend
        margin: 0 0.18rem
        height: 52vw
      .my-luckey-fish
        margin: 0.28rem 0.18rem 0 0.18rem
        height: 35vw
      .my-fortune-fish
        margin: 0.28rem 0.18rem 0 0.18rem
        height: 48vw
      .how-to-get
        position: relative
        margin: 0.28rem 0.18rem 0 0.18rem
        height: 125vw
        .how-to-get-img
          left: 7vw
          width: 80vw
          position: absolute
          top: -1vw
        .how-title
          font-size: 6vw;
          font-family: Arial Rounded MT Bold;
          font-weight: 400;
          color: #FFFFFF;
          position: absolute
          top: 2vw
          left: 16vw
          text-align: center
          z-index: 3
        .how-bg
          position: relative 
          background-image: url(../../assets/img/myluckey-bg.png)
          -moz-background-size:100% 100% 
          background-size:100% 100%
          bottom: -18vw
          left: 2vw
          width: 90.5vw
          height: 25vw
          .how-fish-add
            font-size: 11vw
            float: left
            height: 15vw
            padding: 5vw 5.5vw
            color: #E0741C
          .how-fish
            float: left
            height: 12vw
            padding: 4vw 3.5vw
            .how-fish-img
              height: 100%
            .how-fish-lv
              font-weight: bold
              margin-left: 3vw
              font-size: 3vw;
              font-family: Arial Rounded MT Bold;
              font-weight: bold
              color: #E0741C;
          .how-info1
            margin: 0 auto
            width: 87vw
            line-height: 6vw
            padding: 1vw 2vw 4vw 2vw;
            top: 25vw
            position: absolute
            font-size: 3vw;
            font-family: Arial Rounded MT Bold;
            font-weight: bold
            color: #565656;
            border-bottom: 0.5vw dashed #FDD7A0
        .how-fortune-bg
          position: relative 
          background-image: url(../../assets/img/myluckey-bg.png)
          -moz-background-size:100% 100% 
          background-size:100% 100%
          bottom: -42vw
          left: 2vw
          width: 90.5vw
          height: 25vw
          .wisdom-wrapper
            float: left
            height: 12vw
            padding: 3vw 3vw
            .wisdom-img
              height: 100%
              margin: 0 auto
            .wisdom
              margin-left: -1vw
              font-size: 3.5vw;
              font-family: Arial Rounded MT Bold;
              font-weight: 400;
              color: #565656;
              line-height: 3vw;
          .how-info1
            margin: 1vw auto
            width: 87vw
            line-height: 6vw
            padding: 2vw 2vw 4vw 2vw;
            top: 25vw
            position: absolute
            font-size: 3vw;
            font-family: Arial Rounded MT Bold;
            font-weight: bold
            color: #565656;
          .how-info2
            margin: 1vw auto
            width: 87vw
            line-height: 6vw
            padding: 1vw 2vw 4vw 2vw;
            top: 40vw
            position: absolute
            font-size: 3vw;
            font-family: Arial Rounded MT Bold;
            font-weight: bold
            color: #565656;
      .list
        margin: 0.28rem 0.18rem 0 0.18rem
        height: 127vw
        .list-title
          position: absolute
          top: 4.5vw
          left: 35vw
          width: 100%
          font-size: 2vw
          font-family: Arial Rounded MT Bold
          font-weight: bold
          color: #343434
          line-height: 4vw
          .dot1
            margin-bottom: 0.3vw
            display: inline-block
            width: 1.5vw
            height: 1.5vw
            background: #FFA84A
            border-radius: 50%
          .dot2
            margin-bottom: 0.3vw
            margin-left: 1vw
            display: inline-block
            width: 1.5vw
            height: 1.5vw
            background: #FFA84A
            border-radius: 50%
        .table-header
          top: 10vw
          position: relative
          margin: 0 auto
          width: 90vw
          height: 10vw
          background: #F9DB99
          left: 0
          border: 1px solid #F9DB99;
          border-radius: 2vw 2vw 0 0;
          .header-item
            display: inline-block
            width: 22.5vw
            height: 10vw;
            font-size: 3vw;
            font-family: Arial Rounded MT Bold;
            font-weight: Bold
            color: #565656;
            line-height: 10vw;
            text-align:center
        .list-wrapper
          border: 1px solid #F9DB99;
          margin: 0 auto
          top: 10vw
          position: relative
          width: 90vw
          height: 105.3vw          
          background: #FFFFFF;
          overflow: auto
          .table-body
            width: 90vw
            height: 10vw
            background: #FFF
            border: 1px solid #F9DB99;
            .body-item
              display: inline-block
              width: 22.5vw
              height: 10vw;
              font-size: 0.5vw;
              font-family: Arial Rounded MT Bold;
              font-weight: Bold
              color: #565656;
              line-height: 10vw;
              text-align:center
        .more
          top: 4.5vw
          right: 2.5vw
          position: absolute
          font-size: 1vw;
          font-family: Arial Rounded MT Bold;
          font-weight: bold
          color: #E37137;
      .title
        position: absolute
        top: 4.5vw
        left: 0.435rem
        width: 100%
        height: 0.23rem
        font-size: 0.25rem
        font-family: Arial Rounded MT Bold
        font-weight: bold
        color: #343434
        line-height: 0.28rem
      .luckey-title
        position: absolute
        top: 12.5vw
        left: 0.435rem
        width: 100%
        height: 0.23rem
        font-size: 0.25rem
        font-family: Arial Rounded MT Bold
        font-weight: bold
        color: #343434
        line-height: 0.28rem
      .fortune-title
        position: absolute
        top: 62vw
        left: 0.435rem
        width: 100%
        height: 0.23rem
        font-size: 0.25rem
        font-family: Arial Rounded MT Bold
        font-weight: bold
        color: #343434
        line-height: 0.28rem
      .title-num
        position: absolute
        top: 4.5vw
        left: 85vw
        width: 100%
        height: 0.23rem
        font-size: 0.25rem
        font-family: Arial Rounded MT Bold
        font-weight: bold
        color: #343434
        line-height: 0.28rem
      .top-left
        position: absolute
        width: 3.6vw
        left: 11vw
        top: 0.7vw
      .top-left-bind
        position: absolute
        width: 3.1vw
        left: 11.2vw
        top: -6.5vw
      .top-right
        position: absolute
        width: 3.6vw
        right: 11vw
        top: 0.7vw
      .top-right-bind
        position: absolute
        width: 3.1vw
        right: 11.2vw
        top: -6.5vw
      .bottom-left
        position: absolute
        width: 3.6vw
        left: 11vw
        bottom: 0.7vw
      .bottom-left-bind
        position: absolute
        width: 3.1vw
        left: 11.2vw
        bottom: -6.5vw
      .bottom-right
        position: absolute
        width: 3.6vw
        right: 11vw
        bottom: 0.7vw
      .bottom-right-bind
        position: absolute
        width: 3.1vw
        right: 11.2vw
        bottom: -6.5vw
</style>