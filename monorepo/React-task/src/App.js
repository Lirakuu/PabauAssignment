import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import './App.css';

const App = () => {
    const [step, setStep] = useState('1/2');

    const handleOption = () => {
        setStep('2/2');
    };

    const handleBack = () => {
        setStep('1/2');
    };

    return (
        <Router>
            <div>
                <Header step={step} />
            </div>
            <Body>
                <Routes>
                    <Route
                        path="/"
                        element={<MainSelection handleOptionSelect={handleOption} />}
                    />
                    <Route
                        path="/selected/:option"
                        element={<SelectedOption handleBack={handleBack} />}
                    />
                </Routes>
            </Body>
            <div>
                <Footer />
            </div>
        </Router>
    );
};

const Header = ({ step }) => {
    return (
        <header>
            <h1>Current Step: {step}</h1>
        </header>
    );
};

const MainSelection = ({ handleOptionSelect }) => {
    const options = ['Next JS', 'React JS', 'Node JS', 'Express JS'];
    const navigate = useNavigate();

    const handleOptionClick = (option) => {
        handleOptionSelect();
        navigate(`/selected/${encodeURIComponent(option)}`);
    };

    return (
        <div className="center">
            <h2>Which framework is used for FrontEnd in JavaScript?</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <button onClick={() => handleOptionClick(option)} className="big-button">
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const SelectedOption = ({ handleBack }) => {
    const { option } = useParams();
    const navigate = useNavigate();

    const backButton = () => {
        handleBack();
        navigate('/');
    };

    return (
        <div className="center">
            <h2>Selected Option: {option}</h2>
            <button onClick={backButton} className="big-button">
                Back
            </button>
        </div>
    );
};

const Body = ({ children }) => {
    return <body>{children}</body>;
};

const Footer = () => {
    return <footer>Copyright ©2023 – All Rights Reserved</footer>;
};

export default App;
