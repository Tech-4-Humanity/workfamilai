
import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

// Fix ReactI18NextChildren type conflicts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
