<template>
  <div>
    <div class="header-wrapper">
      <div class="header">
        <img  class="back-btn" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURUdwTPr7//n6//n8//j5//b7//n6//j6//z8//r6//r7//r7//n7//j+//f///////////n7//z9//v8//j6/yQP2FkAAAAQdFJOUwCMVDnWGcf4E+eybaAiCgYd2rI6AAABY0lEQVRYw+2W25aDIAxFFSmgoi2Q///WkoDa8QZT+sjxza5sQi7HNk1VVVVSij+K4pmEEsBzACgBdD0UAVoJJYCJA5QARgklACV8pCGB+qZ5WD3jUMao75pnfLz1co4LMeix+2fzYjgRDBj/RvJ2ym5eOP6FIoKJ9eQsr3lLuPUPEZxZGLzLaF6MDxkgwbqNIXWqeRT/WmUDIuaBv4v5EsC3+B0iQCKivyTMA9XPfkRHhF3vggR+N0GHBHZ3oSRu6qCGYwY2phAQSJDsthHOXmYQCL4Mt6MgMAd7SGBtCBLGxDCut/CxvZeMc71WkifWgdvtXNrGeWLt0G/bAYmJfOptFz7WucPcwjjotCUs2/jHD1Qraa5Td6CGRj/YGcpDUAZyzrFFOuzgSJr2iuUYszj3xBF3Rme7y4krI0Fk+9uZrbeQUcVlQ0+/C+J+mjM+HL0s/N/ASgGNKAVMTVVVVdXv9QZ5USpB3dZraQAAAABJRU5ErkJggg==">
        <button type="button" class="rules-btn">RULES</button>
      </div>
    </div>

    <div class="body-wrapper">
      <div class="body">
        <div class="daily-dividend box-basic">
          <div class="title">
            Daily Dividend
          </div>
          <!-- <img class="daily-bg" src="../../assets/img/daily_bg.png"/> -->
          <img class="bottom-left" src="../../assets/img/small-circle.png"/>
        </div>
        <div class="my-luckey-fish box-basic">

        </div>
        <div class="my-fortune-fish box-basic">

        </div>
        <div class="how-to-get box-basic">

        </div>
        <div class="list box-basic">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
  .header-wrapper
    height: 2.12rem
    background-color: #CF703A
    z-index: 0
    .header
      position: relative
      height: 2.12rem
      width: 100%
      background-image: url(../../assets/img/header.png)
      -moz-background-size:100% 100% 
      background-size:100% 100%
      z-index: 1
      opacity: 0.9
      .back-btn
        position: absolute
        left: 0.19rem
        top: 0.05rem
        width: 0.62rem
      .rules-btn
        position: absolute
        top: 0.18rem
        right: 0
        width: 1.2rem
        height: 0.4rem
        background: rgba(174, 95, 46, 1);
        border: 0.03rem solid #F6A264;
        border-radius: 0.14rem 0rem 0rem 0.14rem;
        line-height: 0.3rem;
        color: #FFFFFF;
        font-size: 0.18rem;
        font-family: Arial Rounded MT Bold;
        font-weight: 00;         
  .body-wrapper
    height: 27rem
    background-color: #FFC415
    .body
      border-radius: 0.25rem 0.25rem 0 0
      background: #ED7372
      height: 27rem
      box-shadow: 0 0.04rem 0 0 #F77F7E;
      padding-top: 0.18rem
      .box-basic
        position: relative 
        width: 7.15rem
        background: #FFFFFF
        box-shadow:  0px 5px 0px 0px #F7DAB0
        border-radius: 15px
        z-index: 3
      .daily-dividend
        margin: 0 0.18rem
        height: 3.54rem
      .my-luckey-fish
        margin: 0.28rem 0.18rem 0 0.18rem
        height: 2.495rem
      .my-fortune-fish
        margin: 0.28rem 0.18rem 0 0.18rem
        height: 3.49rem
      .how-to-get
        margin: 0.28rem 0.18rem 0 0.18rem
        height: 7.725rem
      .list
        margin: 0.28rem 0.18rem 0 0.18rem
        height: 6.24rem
      .title
        position: absolute
        top: 0.25rem
        left: 0.435rem
        width: 2.67rem
        height: 0.23rem
        font-size: 0.25rem
        font-family: Arial Rounded MT Bold
        font-weight: bold
        color: #343434
        line-height: 0.28rem
      .bottom-left
        position: absolute
        width: 0.19rem
        left: 0.875rem
        bottom: 0.05rem
</style>