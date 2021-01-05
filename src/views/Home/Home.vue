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
            <img class="daily" src="../../assets/img/daily.png"/>
            <span class="daily-info1">Yesterday's dividend<br/>Per Lucky Fish</span>
            <span class="daily-money">$289.19</span>
            <span class="daily-info2">Accumulated<br/>dividends</span>
            <span class="daily-info3">Number <br/>of users</span>
            <span class="daily-total">$12289.00</span>
            <span class="user-num">100</span>
            <img class="short-btn" src="../../assets/img/short-btn.png"/>
            <span class="short-btn-text">Get</span>
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
              <span class="wisdom">&nbsp;&nbsp;Agility</span>
            </div>
            <div class="wisdom-wrapper">
              <img src="../../assets/img/wisdom2.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">&nbsp;&nbsp;Talent</span>
            </div>
            <div class="wisdom-wrapper">
              <img src="../../assets/img/wisdom3.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">Strength</span>
            </div>
            <div class="wisdom-wrapper">
              <img src="../../assets/img/wisdom4.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">Wisdom</span>
            </div>
            <div class="wisdom-wrapper">
              <img src="../../assets/img/wisdom5.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">Diligence</span>
            </div>

            <img class="long-btn" src="../../assets/img/long-btn.png"/>
            <div class="long-btn-text-wrapper"><span class="long-btn-text">Merge Fortune Fish</span></div>
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
              <span class="how-fish-lv">lv.50</span>
            </div>
            <div class="how-fish-add">
              +
            </div>
            <div class="how-fish">
              <img src="../../assets/img/how-fish.png" class="how-fish-img"/>
              <br/>
              <span class="how-fish-lv">lv.50</span>
            </div>
            <div class="how-fish-add">
              =
            </div>
            <div class="how-fish2">
              <img src="../../assets/img/daily2.png" class="how-fish-img2"/>
              <br/>
              <span class="how-fish-lv2">Lucky Fish</span>
            </div>

            <div class="how-info1" style="letter-spacing: 0.3vw">
              Merge two LV50 fish has possibility to get a <br/> <span style="color: #E0741C">Lucky Fish</span>
            </div>
          </div>
          <div class="fortune-title">
            Fortune Fish
          </div>

          <div class="how-fortune-bg">
            <div class="wisdom-wrapper1">
              <img src="../../assets/img/Brisk.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">Agility</span>
            </div>
            <div class="wisdom-wrapper1">
              <img src="../../assets/img/Talent.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">Talent</span>
            </div>
            <div class="wisdom-wrapper1">
              <img src="../../assets/img/Strength.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">Strength</span>
            </div>
            <div class="wisdom-wrapper1">
              <img src="../../assets/img/Erudite.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">Wisdom</span>
            </div>
            <div class="wisdom-wrapper1">
              <img src="../../assets/img/Diligent.png" class="wisdom-img"/>
              <br/>
              <span class="wisdom">Diligence</span>
            </div>
            <div class="how-info1" style="letter-spacing: 0.3vw">
              Merge two LV50 fish has possibility to get<br/>  <span style="color: #E0741C">Agility,Talent,Strength,Wisdom,Diligence</span>
            </div>
            <div class="how-info2" style="letter-spacing: 0.3vw">
              Collect all 5 fortune fish,must get a lucky fish
            </div>
          </div>
        </div>
        <div class="list box-basic">
          <div class="list-title">
            <div class="dot1"></div> Lucky Fish<div class="dot2"></div>
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
              v-for="(item, index) in list" 
              :key="item.id"
              @touchstart="handleTouchStart"
              @touchEnd="handleTouchEnd"
            >
              <div class="body-item">
                {{item.userId}}
              </div>
              <div class="body-item">
                {{item.amount}}
              </div>
              <div class="body-item">
                {{item.time?item.time.split(' ')[0]:''}}
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
    <div v-show="loading" class='popContainer' style="background-color: rgba(0, 0, 0, 0.5);">
      <div class="sun-loading"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      loading: false,
      startY: 0,
      timer: null,
      touchStatus: false,
      dialog: false,
      list: [{},{},{},{},{},{},{},{},{},{}],
      dataList: []
    }
  },
  mounted() {
    this.getJson()
  },
  methods: {
    getJson() {
      this.loading = true
      let data = JSON.parse(localStorage.getItem("data"))
      data.forEach((item, index) => {
        this.dataList.push({})
        this.dataList[index].amount = item.amount
        this.dataList[index].id = item.id
        this.dataList[index].share = item.share
        this.dataList[index].time = item.time
        this.dataList[index].userId = item.user_id
      })

      this.getList()
    },
    getList() {
      this.loading = true
      setTimeout(() =>{
        let length = this.dataList.length
        if(length > 10){
          if(!this.list[0].id){
            this.list = []
          }
          this.dataList.forEach((item, index) => {
            if(index <= 9){
              this.list.push(item)
            }
          })
          this.dataList.splice(0, 10)
          this.loading = false
        } else if(!this.list[0].id){
          this.dataList.forEach((item, index) => {
            this.list[index] = item
          })
          this.dataList = []
          this.loading = false
        } else {
          this.dataList.forEach(item => {
            this.list.push(item)
          })
          this.dataList = []
          this.loading = false
        }
      }, 1000)
    },
    handleTouchEnd (e) {
      this.touchStatus = false
      let diff = e.changedTouches[0].pageY - this.startY
      if(diff < 0  && this.dataList.length){
        this.getList()
      }
    },
    handleTouchStart (e) {
      this.startY = 0
      this.touchStatus = true
      this.startY = e.changedTouches[0].pageY
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
  .sun-loading 
    width: 45px;
    height: 45px;
    display: block;
    animation: sunLoading 1s steps(12, end) infinite;
    background: transparent 	url('data:image/gif;base64,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');
    background-size: 100%;
    margin:auto;
    position:absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right:0;
  .popContainer
    z-index: 10
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    .img
      margin: 0 auto
      z-index: 11
      position: relative
      background-image: url(../../assets/img/rule.png)
      background-repeat: no-repeat
      -moz-background-size:100% 100% 
      background-size: 100%
      margin: 0 auto
      width: 90%;
      height: 100%;
      object-fit: contain
      .close-img
        z-index: 11
        cursor: pointer
        display: inline-block
        margin-left: 81vw
        margin-top: 19.5vw
        width: 6.5vw
        height: 6.5vw;
        object-fit: contain
  .header-wrapper
    height: 39vw
    background-color: #CF703A
    z-index: 0
    .header
      position: relative
      height: 39vw
      width: 100%
      background-image: url(../../assets/img/header.png)
      -moz-background-size:100% 100% 
      background-size:100% 100%
      z-index: 1
      opacity: 0.9
      .back-btn
        position: absolute
        left: 2.4vw
        top: 3vw
        width: 8vw
      .rules-btn
        position: absolute
        top: 3.9vw
        right: -0.3vw
        width: 16vw
        height: 6vw
        background: rgba(174, 95, 46, 1);
        border: 0.5vw solid #F6A264;
        border-radius: 2vw 0rem 0rem 2vw;
        line-height: 3vw;
        color: #FFFFFF;
        font-size: 2vw;
        font-family: Arial Rounded MT Bold;
        font-weight: Bold;         
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
          width: 17vw
          top: 23vw
          left: 8vw
        .daily-info1
          letter-spacing: 0.3vw
          line-height: 4vw
          position: absolute
          font-size: 3vw;
          font-family: Arial Rounded MT Bold;
          font-weight: Bold;
          top: 19vw
          left: 40vw
          text-align: center
        .daily-money
          position: absolute
          font-size: 7vw;
          font-family: Arial Rounded MT Bold
          font-weight: bold
          top: 28vw
          left: 45vw
          text-align: center
          color: #F66E00
        .daily-info2
          position: absolute     
          font-size: 2.5vw;
          font-family: HelveticaNeue;
          top: 37vw
          left: 40vw
          text-align: center
          color: #565656;
        .daily-info3
          position: absolute     
          font-size: 2.5vw;
          font-family: HelveticaNeue;
          top: 37vw
          left: 65vw
          text-align: center
          color: #565656;
        .daily-total
          position: absolute     
          font-size: 3vw;
          font-family: Arial Rounded MT Bold
          font-weight: Bold;
          top: 44.5vw
          left: 40vw
          text-align: center
          color: #F66E00
        .user-num
          position: absolute     
          font-size: 3vw;
          font-family: Arial Rounded MT Bold
          font-weight: Bold;
          top: 44.5vw
          left: 67vw
          text-align: center
          color: #F66E00
        .short-btn
          width: 30vw
          display: inline-block
          position: absolute
          top: 49vw
          left: 31vw
        .short-btn-text
          font-size: 3.8vw;
          font-family: Arial Rounded MT Bold;
          font-weight: Bold;
          color: #FFFFFF;
          position: absolute
          top: 52vw
          left: 42vw
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
          width: 14vw
          float: left
          height: 16vw
          padding: 3vw 2vw
          .wisdom-img
            height: 100%
          .wisdom
            margin-left: 0vw
            font-size: 3vw;
            font-family: Arial Rounded MT Bold;
            font-weight: Bold;
            color: #565656;
            line-height: 3vw;
        .long-btn
          width: 45vw;
          position: absolute
          left: 22vw
          bottom: -12.5vw
        .long-btn-text-wrapper
          width: 45vw;
          position: absolute
          left: 27vw
          bottom: -8.5vw 
          padding-left: 50%-22.5vw
        .long-btn-text
          font-size: 3.8vw;
          font-family: Arial Rounded MT Bold;
          font-weight: Bold;
          color: #fff
      .daily-dividend
        margin: 0 auto
        height: 52vw
      .my-luckey-fish
        margin: 4vw auto 0
        height: 35vw
      .my-fortune-fish
        margin: 4vw auto 0
        height: 48vw
      .how-to-get
        position: relative
        margin: 4vw auto 0
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
            width: 15vw
            padding: 4vw 1vw
            .how-fish-img
              width: 100%
            .how-fish-lv
              font-weight: bold
              margin-left: 3vw
              font-size: 3vw;
              font-family: Arial Rounded MT Bold;
              font-weight: bold
              color: #E0741C;
          .how-fish2
            float: left
            width: 18.5vw
            padding: 3vw 1vw
            .how-fish-img2
              width: 11.5vw
            .how-fish-lv2
              font-weight: bold
              margin-left: -3vw
              font-size: 3vw;
              font-family: Arial Rounded MT Bold;
              font-weight: bold
              color: #E0741C;
          .how-info1
            margin: 0 auto
            width: 87vw
            line-height: 5vw
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
          .wisdom-wrapper1
            text-align: center
            float: left
            height: 14vw
            padding: 4.5vw 0 0 4vw
            .wisdom-img
              height: 100%
            .wisdom
              font-size: 3vw;
              font-family: Arial Rounded MT Bold;
              font-weight: Bold;
              color: #565656;
              line-height: 3vw;
          .how-info1
            margin: 1vw auto
            width: 87vw
            line-height: 5vw
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
            line-height: 5vw
            padding: 1vw 2vw 4vw 2vw;
            top: 40vw
            position: absolute
            font-size: 3vw;
            font-family: Arial Rounded MT Bold;
            font-weight: bold
            color: #565656;
      .list
        margin: 4vw auto 0
        height: 127vw
        .list-title
          position: absolute
          top: 4.5vw
          left: 37vw
          width: 100%
          font-size: 3.5vw
          font-family: Arial Rounded MT Bold
          font-weight: bold
          color: #343434
          line-height: 4vw
          .dot1
            margin-bottom: 0.5vw
            margin-right: 1vw
            display: inline-block
            width: 1.5vw
            height: 1.5vw
            background: #FFA84A
            border-radius: 50%
          .dot2
            margin-bottom: 0.5vw
            margin-left: 2vw
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
          border: 2px solid #F9DB99;
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
          border: 2px solid #F9DB99;
          margin: 0 auto
          top: 10vw
          position: relative
          width: 90vw
          height: 100vw          
          background: #FFFFFF;
          overflow: auto
          .table-body
            width: 90vw
            height: 9.8vw
            background: #FFF
            border-top: 1px solid #F9DB99;
            .body-item
              display: inline-block
              width: 22.5vw
              height: 10vw;
              font-size: 2.5vw;
              font-family: Arial Rounded MT Bold;
              font-weight: Bold
              color: #565656;
              line-height: 10vw;
              text-align:center
        .more
          top: 4.5vw
          right: 2.5vw
          position: absolute
          font-size: 3vw;
          font-family: Arial Rounded MT Bold;
          font-weight: bold
          color: #E37137;
      .title
        position: absolute
        top: 4.5vw
        left: 5vw
        width: 100%
        height: 0.23rem
        font-size: 3.5vw
        font-family: Arial Rounded MT Bold
        font-weight: bold
        color: #343434
        line-height: 0.28rem
      .luckey-title
        position: absolute
        top: 12.5vw
        left: 5vw
        width: 100%
        height: 0.23rem
        font-size: 3.5vw
        font-family: Arial Rounded MT Bold
        font-weight: bold
        color: #343434
        line-height: 0.28rem
      .fortune-title
        position: absolute
        top: 62vw
        left: 5vw
        width: 100%
        height: 0.23rem
        font-size: 3.5vw
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
        font-size: 3.5vw
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