class ScrollAnimate {
  constructor (options = {}) {
    this.container = options.container || false
    this.animatedClass = options.animatedClass || 'animated'
    this.activeClass = options.activeClass || 'animated-active'
  }
  activate (el, { modifiers: mod, value: val }) {
    // 创建初始值
    let _a = typeof val === 'string' ? { active: val } : val
    let _h = document.documentElement.clientHeight
    let _t = null

    // 初始化添加class
    el.classList.add(this.animatedClass)
    _a.leave && el.classList.add(_a.leave)

    // 绑定滚动事件
    let _o = this.container ? document.querySelector(this.container) : document
    let _fn = () => {
      const { top, bottom } = el.getBoundingClientRect()
      const _show = top < _h && bottom > 0
      clearTimeout(_t)
      if (_show) { // 进入视图
        _t = setTimeout(() => {
          _a.leave && el.classList.remove(_a.leave)
          el.classList.add(_a.active, this.activeClass)
        }, _a.delay || 0)
      } else if (mod.repeat) { // 退出视图 && 有repeat修饰符
        _a.leave && el.classList.add(_a.leave)
        el.classList.remove(_a.active, this.activeClass)
      }
    }
    _fn()
    _o.addEventListener('scroll', _fn)
    
  }
}

export default {
  install (Vue, options) {
    const SA = new ScrollAnimate(options)
    // 添加指令 scroll-animate
    Vue.directive('scroll-animate', {
      // bind (el, binding) {
      //   SA.activate(el, binding)
      // },
      inserted (el, binding) {
        SA.activate(el, binding)
      }
    })
  }
}
