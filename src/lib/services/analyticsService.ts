import mixpanel from 'mixpanel-browser';
import { CONFIG } from '../config/env';
import { AppError } from '../redux/slices/appStateSlice';

// eslint-disable-next-line functional/no-let
let init = false;

/** To call in order to start the analytics service, otherwise no event will be sent */
export const initAnalytics = (): void => {
  if (CONFIG.ANALYTCS.ENABLE) {
    init = true;
    if (CONFIG.ANALYTCS.MOCK) {
      // eslint-disable-next-line no-console
      console.log('Mixpanel events mock on console log.');
    } else {
      mixpanel.init(CONFIG.ANALYTCS.TOKEN, {
        api_host: CONFIG.ANALYTCS.API_HOST,
        persistence: CONFIG.ANALYTCS.PERSISTENCE as 'cookie' | 'localStorage',
        ip: CONFIG.ANALYTCS.LOG_IP,
        property_blacklist: CONFIG.ANALYTCS.PROPERTY_BLACKLIST,
        debug: CONFIG.ANALYTCS.DEBUG,
      });
    }
  }
};

/** To notify an event through the analytics tool */
export const trackEvent = (event_name: string, properties?: any): void => {
  if (CONFIG.ANALYTCS.ENABLE && init) {
    if (CONFIG.ANALYTCS.MOCK) {
      // eslint-disable-next-line no-console
      console.log(event_name, properties);
    } else {
      try {
        mixpanel.track(event_name, {
          ...CONFIG.ANALYTCS.ADDITIONAL_PROPERTIES,
          ...properties,
          ...CONFIG.ANALYTCS.ADDITIONAL_PROPERTIES_IMPORTANT,
        });
      } catch (reason) {
        console.error('Something gone wrong while sending data to mixpanel:', reason);
        // eslint-disable-next-line no-console
        console.log(event_name, properties);
      }
    }
  }
};

/** To notify an error through the analytics tool */
export const trackAppError = (error: AppError): void => {
  if (CONFIG.ANALYTCS.ENABLE && init) {
    trackEvent('GENERIC_ERROR', error);
  } else {
    console.error(error);
  }
};