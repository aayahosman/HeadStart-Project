import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from './pages/landing/Landing'
import { StudyGuide } from './pages/studyguide/StudyGuide'
import { Summarize } from './pages/summarize/Summarize'
import { Upload } from './pages/upload/Upload'
import { VisualGraph } from './pages/visualgraph/VisualGraph'

function AppRouter(props) {
    return (
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/studyguide" element={<StudyGuide/>} />
            <Route path="/summarize" element={<Summarize/>} />
            <Route path="/upload" element={<Upload/>}/>
            <Route path="/visualgraph" element={<VisualGraph/>}/>
        </Routes>
    );
}

export default AppRouter;