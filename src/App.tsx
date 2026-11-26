import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SiteLayout } from "./components/SiteLayout.tsx"
import { ToastProvider } from "./components/Toast.tsx"
import { Home } from "./pages/Home.tsx"
import { NotFound } from "./pages/NotFound.tsx"
import { Privacy } from "./pages/Privacy.tsx"
import { Terms } from "./pages/Terms.tsx"

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  )
}
