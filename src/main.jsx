import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PostHogProvider } from '@posthog/react'

const options = {
  api_host: 'https://us.i.posthog.com',
  defaults: '2026-01-30',
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostHogProvider
      apiKey="phc_nEC4aP78HxFzCPEYJ5QNX8Cqn03zPDn2QW3XizrSNOc"
      options={options}
    >
      <App />
    </PostHogProvider>
  </StrictMode>
)