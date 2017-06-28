export default {
  name: 'Item',
  components: {},
  data() {
    return {
      touch: {
        screen1: {
          touchStartY: '',
          touchEndY: '',
        },
        screen2: {
          touchStartY: '',
          touchEndY: '',
        },
        bottomTip: '向上拖动查看商品详情',
      },
    }
  },
  methods: {
    handleTouchStart(screen, e) {
      if (screen === 1) {
        this.touch.screen1.touchStartY = e.targetTouches[0].pageY
      } else {
        this.touch.screen2.touchStartY = e.targetTouches[0].pageY
      }
    },
    handleTouchMove(screen, e) {
      if (screen === 1) {
        console.log(e)
      }
    },
    handleTouchEnd(screen, e) {
      if (screen === 1) {
        this.touch.screen1.touchEndY = e.changedTouches[0].pageY
        const refScreen1 = this.$refs.screen1
        const refScreen1Con = this.$refs.screen1Con
        const touchCanToggle = this.touch.screen1.touchStartY - this.touch.screen1.touchEndY > 70 // 手势滑动垂直距离>70
        const pageBottomShow = refScreen1.offsetHeight + refScreen1.scrollTop >= refScreen1Con.offsetHeight // scroll con 最底端显示
        if (touchCanToggle && pageBottomShow) {
          this.touch.bottomTip = '松手查看商品详情'
          this.$refs.scrollCon.style.top = '-100%'
          this.touch.bottomTip = '向上拖动查看商品详情'
        }
      } else {
        this.touch.screen2.touchEndY = e.changedTouches[0].pageY
        const refScreen2 = this.$refs.screen2
        const touchCanToggle = this.touch.screen2.touchEndY - this.touch.screen2.touchStartY > 70 // 手势滑动垂直距离>70
        const pageTopShow = refScreen2.scrollTop <= 0 // scroll con 最顶端显示
        if (touchCanToggle && pageTopShow) {
          this.$refs.scrollCon.style.top = '0'
        }
      }
    },
  },
}
