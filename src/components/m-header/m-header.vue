<template>
    <div class="m-header">
        <div class="icon"></div>
        <div class="text">tecent Music</div>
            <i class="icon-mine"></i>
    </div>
</template>

<script>
  export default {
    name: "m-header"
  }
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
    .m-header{
        position: relative;
        height: 44px;
        text-align: center;
        color: $color-theme;
        font-size:0;
        .text{
            display inline-block;
            vertical-align top;
            line-height: 44px;
            font-size: $font-size-large;
        }
        .icon {
            display:inline-block;
            vertical-align:top;
            margin-top: 6px;
            width: 30px;
            height: 32px;
            margin-right: 9px;
            bg-image('logo');
            background-size: 30px 32px;
        }
    }

</style>
