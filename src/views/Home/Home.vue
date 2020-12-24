<template>
  <div>
    <div class="header-wrapper">
      <div class="header">
        <button type="button" class="rules-btn"><span class="rules-title">RULES</span></button>
        <img src="../../assets/img/four_money.png" class="four-money">
      </div>
    </div>

    <div class="body-wrapper">
      <div class="body"></div>
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
      background-image: url(../../assets/img/header_bg.png)
      -moz-background-size:100% 100% 
      background-size:100% 300%
      z-index: 1
      opacity: 0.9
      .four-money
        position: absolute
        top: 0.1rem
        left: 0.68rem
        width: 2.59rem
        height: 2.12rem
      .rules-btn
        position: absolute
        top: 0.24rem
        right: 0
        width: 0.79rem
        height: 0.27rem
        background: rgba(174, 95, 46, 0.58);
        border: 0.03rem solid #F6A264;
        border-radius: 0.14rem 0rem 0rem 0.14rem;
        line-height: 0.27rem;
        .rules-title
          display: inline-block
          height: 0.13rem
          width: 0.6rem
          font-size: 0.18rem;
          font-family: Arial Rounded MT Bold;
          font-weight: 00;
          color: #FFFFFF;
          
  .body-wrapper
    height: 24.42rem
    background-color: #CF703A
    .body
      border-radius: 0.15rem 0.15rem 0 0
      background: #ED7372
      height: 24.42rem
      box-shadow: 0 0.04rem 0 0 #F77F7E;
</style>