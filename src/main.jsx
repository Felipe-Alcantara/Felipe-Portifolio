import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { allProjects } from './data/projects.jsx'
import './index.css'
import { findProjectByPath, readSpaRedirectPath } from './utils/project-routes.js'

const ProjectPage = lazy(() => import('./pages/project-page.jsx'))

const redirectedPath = readSpaRedirectPath(window.location)

if (redirectedPath) {
  window.history.replaceState(null, '', redirectedPath)
}

const projectFromRoute = findProjectByPath(allProjects, window.location.pathname)
const RootComponent = projectFromRoute ? (
  <Suspense fallback={null}>
    <ProjectPage project={projectFromRoute} />
  </Suspense>
) : (
  <App />
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {RootComponent}
  </React.StrictMode>,
)
