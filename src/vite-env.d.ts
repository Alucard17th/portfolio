/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COSMIC_BUCKET?: string;
  readonly VITE_COSMIC_READ_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
