import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { allProjects } from './data/projects.jsx'
import './index.css'
import ProjectPage from './pages/project-page.jsx'
import { findProjectByPath, readSpaRedirectPath } from './utils/project-routes.js'

const redirectedPath = readSpaRedirectPath(window.location)

if (redirectedPath) {
  window.history.replaceState(null, '', redirectedPath)
}

const projectFromRoute = findProjectByPath(allProjects, window.location.pathname)
const RootComponent = projectFromRoute ? <ProjectPage project={projectFromRoute} /> : <App />

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {RootComponent}
  </React.StrictMode>,
)
