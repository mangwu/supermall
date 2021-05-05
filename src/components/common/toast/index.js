import Toast from './Toast.vue'

const obj = {}

obj.install = function(Vue) {
  // console.log('执行toast-obj-install函数');
  // 默认传递Vue参数
  // console.log(Vue);
  // 在原型中添加$toast引用， 指代为Toast组件(单纯赋值不会有template和style)
  // 1. 创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 2. new的方式，根据组件构造器创建出一个组件对象
  const toast = new toastConstructor()
  // 3. 将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  // 4. toast.$el就是上面创建的div,全局添加到文档对象模型中
  document.body.appendChild(toast.$el)
  // 5. 添加到原型
  Vue.prototype.$toast = toast
}

export default obj