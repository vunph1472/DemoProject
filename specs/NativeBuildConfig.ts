import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

type BuildConfig = {
  versionName?: string;
  versionCode?: number;
  architecture?: string;
}

export interface Spec extends TurboModule {
  getBuildConfig(): BuildConfig;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'NativeBuildConfig',
);