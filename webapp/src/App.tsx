import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAllServices, getServiceRoute } from './lib/routes'

import { TrpcProvider } from './lib/trpc'

import { AllServicesPage } from './pages/AllServicesPage'
import { ServicePage } from './pages/ServicePage'
import { Layout } from './components/Layout'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllServices()} element={<AllServicesPage />} />
            {/* <Route path={getServiceRoute({ servId: ':servId' })} element={<ServicePage />} /> */}
            <Route path={getServiceRoute(':servId')} element={<ServicePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
