declare module 'daisyui' {
  interface DaisyUIConfig {
    themes?: string[] | object[];
  }
  
  function daisyui(config?: DaisyUIConfig): any;
  export = daisyui;
}