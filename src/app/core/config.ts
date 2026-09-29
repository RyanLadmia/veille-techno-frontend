export interface AppConfig {
    API_PORT: string;
  }
  
  declare global {
    interface Window {
      __env: AppConfig;
    }
  }
  
  export const config = window.__env;