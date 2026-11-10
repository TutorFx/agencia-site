import MobileDetect from 'mobile-detect'

// Site estático: não há `req` no servidor, então detectamos o dispositivo no
// navegador, depois da hidratação, para não gerar diferenças com o HTML gerado.
export default ({ store }) => {
  window.onNuxtReady(() => {
    const md = new MobileDetect(window.navigator.userAgent)
    const isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile'
    const isTablet = md.tablet() !== null || md.mobile() === 'UnknownTablet'
    const isDesktop = !isMobile && !isTablet

    store.commit('setDevice', {
      isMobile,
      isTablet,
      isDesktop,
    })
  })
}
