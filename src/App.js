
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"

import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

import AboutPage from "./pages/AboutPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider } from "./context/FeedbackContext"


function App() {

    
    
    return (
        <FeedbackProvider>
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={
                        <>
                            <Header />
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </Router>
            
        </div>
        </FeedbackProvider>
    )
}

export default App