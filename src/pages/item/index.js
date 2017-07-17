import { itemServ } from '@/service'
import { formatPrice, currency } from '@/config/filter'

export default {
  name: 'Item',
  components: {},
  filters: {
    formatPrice,
    currency,
  },
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
        bottomTip: '向上拖动查看图文详情',
        headerTip: '',
      },
      swiperImgList: [],
      itemDetail: '',
      screenWidth: '',
      item: {
        extra: '',
      },
    }
  },
  created() {
    this.screenWidth = `${screen.width * 2}px`
    itemServ.getItemDetail({ itemId: this.$route.params.itemId }).then(e => {
      this.swiperImgList = e.itemDetail.images
      this.itemDetail = e.itemDetail.detail
      this.item = e.item
    })
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
      if (screen === 1 && this.judgeScreen1Up(e)) {
        this.touch.bottomTip = '松手查看商品详情'
      } else if (screen === 2) {
        if (this.judgeScreen2Down(e)) {
          this.touch.headerTip = '下拉返回宝贝详情'
        } else {
          this.touch.headerTip = ''
        }
      }
    },
    handleTouchEnd(screen, e) {
      if (screen === 1 && this.judgeScreen1Up(e)) {
        this.$refs.scrollCon.style.top = '-100%'
        this.touch.bottomTip = '向上拖动查看图文详情'
      } else if (screen === 2 && this.judgeScreen2Down(e)) {
        this.touch.headerTip = ''
        this.$refs.scrollCon.style.top = '0'
      }
    },
    judgeScreen1Up(e) {
      this.touch.screen1.touchEndY = e.changedTouches[0].pageY
      const refScreen1 = this.$refs.screen1
      const refScreen1Con = this.$refs.screen1Con
      const touchCanToggle = this.touch.screen1.touchStartY - this.touch.screen1.touchEndY > 70 // 手势滑动垂直距离>70
      const pageBottomShow = refScreen1.offsetHeight + refScreen1.scrollTop >= refScreen1Con.offsetHeight // scroll con 最底端显示
      return touchCanToggle && pageBottomShow
    },
    judgeScreen2Down(e) {
      this.touch.screen2.touchEndY = e.changedTouches[0].pageY
      const refScreen2 = this.$refs.screen2
      const touchCanToggle = this.touch.screen2.touchEndY - this.touch.screen2.touchStartY > 70 // 手势滑动垂直距离>70
      const pageTopShow = refScreen2.scrollTop <= 0 // scroll con 最顶端显示
      return touchCanToggle && pageTopShow
    },
  },
}
