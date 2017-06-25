export default {
  name: 'header',
  props: ['colorIsActive'],
  data() {
    return {}
  },
  mounted: function() {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.background)
  },
  methods: {},
}
