import environment from '@constants/environment'
import mixpanel from 'mixpanel-browser'

interface IPrintProperties {
  printTitle: string
}

const Mixpanel = () => {
  const withBrowser = <T extends Function>(callback: T) => {
    const isBrowser = typeof document !== 'undefined'
    if (isBrowser) {
      callback()
    }
  }

  const withMixpanelLoaded = <T extends Function>(callback: T) => {
    const isBrowser = typeof document !== 'undefined'
    // @ts-ignore - __loaded is not in the type definition but it is in the library
    if (isBrowser && mixpanel.__loaded) {
      callback()
    }
    // @ts-ignore - __loaded is not in the type definition but it is in the library
    if (isBrowser && !mixpanel.__loaded) {
      // Mixpanel is not loaded yet to run the track event
      // We setup a listener to run the track event when it is loaded
      // @ts-ignore
      window.addEventListener('Mixpanel:loaded', callback)
    }
  }

  const init = () =>
    withBrowser(() => {
      mixpanel.init(environment.mixpanelToken)
      // trigger the Mixpanel:loaded event
      const mixpanelLoadedEvent = new Event('Mixpanel:loaded')
      window.dispatchEvent(mixpanelLoadedEvent)
    })

  const trackUserEnteredHome = () =>
    withMixpanelLoaded(() => mixpanel.track('User Entered Home'))

  const trackUserViewedPrint = ({ printTitle }: IPrintProperties) =>
    withMixpanelLoaded(() =>
      mixpanel.track('User Viewed Print', { 'Print Title': printTitle })
    )

  const trackUserClickedSharePrint = ({ printTitle }: IPrintProperties) =>
    withMixpanelLoaded(() =>
      mixpanel.track('User Clicked Share Print', { 'Print Title': printTitle })
    )

  const trackUserClickedOrderPrint = ({ printTitle }: IPrintProperties) =>
    withMixpanelLoaded(() =>
      mixpanel.track('User Clicked Order Print', { 'Print Title': printTitle })
    )

  const trackUserEnteredGallery = () =>
    withMixpanelLoaded(() => mixpanel.track('User Entered Gallery'))

  return {
    init,
    trackUserEnteredHome,
    trackUserViewedPrint,
    trackUserClickedSharePrint,
    trackUserClickedOrderPrint,
    trackUserEnteredGallery,
  }
}

const mixpanelService = Mixpanel()

export default mixpanelService
