import LoginForm from '../component/LoginForm.vue'

export default ({ app }) => {
  // we globally register our component in the app
  app.component('MyLogin', LoginForm)
}
