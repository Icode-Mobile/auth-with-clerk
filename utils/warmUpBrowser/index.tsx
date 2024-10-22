import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';

// Fazer o carregamento pre maturo do browser
// carrega em segundo plano para que o usuário
// não tenha uma pessima experiência
export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();

    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};
