const viteEnv = import.meta.env

export const ROOT_DOMAIN = viteEnv.VITE_ROOT_DOMAIN
export const API_URL = viteEnv.VITE_API_URL
export const IS_DEV = viteEnv.MODE === 'development'
export const IS_PROD = viteEnv.MODE === 'production'

