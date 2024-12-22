import { TrpcProvider } from './lib/trpc'
import { AllServicesPage } from './pages/AllServicesPage'

export const App = () => {
  return (
    <TrpcProvider>
      <AllServicesPage />
    </TrpcProvider>
  )
}
