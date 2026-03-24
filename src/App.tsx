import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AdvancedSearchFilterPage } from './pages/AdvancedSearchFilterPage/AdvancedSearchFilterPage'
import { ApproveRejectModelPage } from './pages/ApproveRejectModelPage/ApproveRejectModelPage'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { StatusChangeModelPage } from './pages/StatusChangeModelPage/StatusChangeModelPage'
import { UserManagementList } from './pages/UserManagementList/UserManagementList'
import AgentProfilePage from './pages/AgentProfilePage/AgentProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/advancedsearchfilterpage"
          element={<AdvancedSearchFilterPage />}
        />
        <Route
          path="/approverejectmodel"
          element={<ApproveRejectModelPage />}
        />
        <Route path="/statuschangemodel" element={<StatusChangeModelPage />} />
        <Route path="/usermanagementlist" element={<UserManagementList />} />
        <Route path="/agentprofile" element={<AgentProfilePage />} />
        <Route
          path="/propertymoderation"
          element={<Navigate to="/approverejectmodel" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
