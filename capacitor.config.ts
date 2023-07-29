import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'test.project',
  appName: 'test-project',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
