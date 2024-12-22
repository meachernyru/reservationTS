import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAllServices, getServiceRoute } from './lib/routes'

import { TrpcProvider } from './lib/trpc'

import { AllServicesPage } from './pages/AllServicesPage'
import { ServicePage } from './pages/ServicePage'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllServices()} element={<AllServicesPage />} />
          <Route path={getServiceRoute({ servId: ':servId' })} element={<ServicePage />} />
          {/* <Route path={"serv/:servId"} element={<ServicePage />} /> */}
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
