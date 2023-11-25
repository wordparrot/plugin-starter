import pluginFactoryFn from '@/src/main';

export default function sandboxModule(sandboxVersion?: string) {
  switch (sandboxVersion) {
    default:
      return pluginFactoryFn();
  }
}
