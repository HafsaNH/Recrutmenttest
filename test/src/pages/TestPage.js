import React from 'react';
import { useHistory } from 'react-router-dom';
import languageTestImg from '../assets/img/languages.jpeg';
import personalityTestImg from '../assets/img/personalitytest.jpeg';
import skillTestImg from '../assets/img/Competencetest.jpeg';
import '../scss/pages/TestPage.scss';
import Footer from '../components/layout/Footer';

const TestPage = () => {
  const history = useHistory();

  const handleStartTest = (testType) => {
    alert(`Starting ${testType} test!`);
    switch (testType) {
      case 'Language':
        history.push('/language-test');
        break;
      case 'Personality':
        history.push('/personality-test');
        break;
      case 'competence':
        history.push('/competence-test');
        break;
      default:
        console.error('Unknown test type');
    }
  };

  return (
    <div className="test-page">
      <h2>Feel free to take a Test</h2>
      <div className="test-options">
        <div className="test-option">
          <img src={languageTestImg} alt="Language Test" />
          <button onClick={() => handleStartTest('Language')}>Start Language Test</button>
        </div>
        <div className="test-option">
          <img src={personalityTestImg} alt="Personality Test" />
          <button onClick={() => handleStartTest('Personality')}>Start Personality Test</button>
        </div>
        <div className="test-option">
          <img src={skillTestImg} alt="Competence test" />
          <button onClick={() => handleStartTest('competence')}>Start Skill Test</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TestPage;
