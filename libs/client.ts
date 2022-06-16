import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'shuhei308',
  apiKey: process.env.API_KEY || '6a21f51e918f4019a577a51132c532e2f3e3',
})