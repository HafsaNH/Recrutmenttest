import React, { useState, useEffect, useRef } from 'react';
import '../../scss/pages/PersonalityTest.scss';

const toutesLesQuestions = [
  // Questions à choix multiples
  { type: 'qcm', question: 'Quel est le langage de programmation le plus utilisé pour le développement web ?', options: ['Python', 'JavaScript', 'Java', 'C++'], correct: 'JavaScript' },
  { type: 'qcm', question: 'Quel framework est principalement utilisé pour le développement mobile cross-platform ?', options: ['React', 'Angular', 'Flutter', 'Vue'], correct: 'Flutter' },
  { type: 'qcm', question: 'Quel est l\'algorithme de tri le plus efficace pour les grandes listes non triées ?', options: ['Tri à bulles', 'Tri rapide', 'Tri par insertion', 'Tri par sélection'], correct: 'Tri rapide' },
  
  // Questions sur une échelle de mesure
  { type: 'echelle', question: 'Évaluez votre niveau de compétence en JavaScript sur une échelle de 1 à 5.', correct: '4' },
  { type: 'echelle', question: 'Évaluez votre niveau de compétence en gestion de base de données SQL sur une échelle de 1 à 5.', correct: '3' },
  { type: 'echelle', question: 'Évaluez votre niveau de compétence en développement web frontend sur une échelle de 1 à 5.', correct: '4' },
  
  // Questions ouvertes
  { type: 'ouverte', question: 'Décrivez une expérience significative où vous avez utilisé des techniques d\'optimisation de code.', correct: '' },
  { type: 'ouverte', question: 'Expliquez comment vous avez résolu un problème complexe de développement logiciel.', correct: '' }
];

const getQuestionsAleatoires = (nombreQuestions) => {
  const questionsMelangees = toutesLesQuestions.sort(() => Math.random() - 0.5);
  return questionsMelangees.slice(0, nombreQuestions);
};

const PersonalityTest = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(300);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [answerStates, setAnswerStates] = useState({});
  const timerRef = useRef(null);

  useEffect(() => {
    startTest();
    return () => clearInterval(timerRef.current);
  }, []);

  const startTest = () => {
    setQuestions(getQuestionsAleatoires(5));
    setScore(null);
    setTimeRemaining(300);
    setSelectedAnswers({});
    setAnswerStates({});

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(timerRef.current);
        handleSubmit();
        return 0;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const handleAnswerChange = (index, value) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [index]: value
    }));
  };

  const handleSubmit = () => {
    stopTimer();

    let calculatedScore = 0;
    const newAnswerStates = {};

    questions.forEach((q, index) => {
      const reponseCorrecte = q.correct;
      const reponseUtilisateur = selectedAnswers[index];

      if (q.type === 'qcm' || q.type === 'echelle') {
        if (reponseUtilisateur === reponseCorrecte) {
          calculatedScore += 10;
          newAnswerStates[index] = 'correct';
        } else {
          newAnswerStates[index] = 'incorrect';
        }
      } else if (q.type === 'ouverte') {
        if (reponseUtilisateur && reponseUtilisateur.trim() !== '') {
          calculatedScore += 10;
        }
        newAnswerStates[index] = ''; // Pas de changement de couleur pour les questions ouvertes
      }
    });

    setScore(Math.min(calculatedScore, 50));
    setAnswerStates(newAnswerStates);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="competence-test">
      <div className="header">
        <h1>Test de Compétence</h1>
        {score !== null && <p className="score">Votre score est: <span>{score}</span> / 50</p>}
      </div>
      <div className="timer">Temps restant: {formatTime(timeRemaining)}</div>
      <div className="questions-container">
        {questions.map((q, index) => (
          <div key={index} className="question">
            <p>{index + 1}. {q.question}</p>
            {q.type === 'qcm' && q.options.map((option, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={option}
                  id={`q${index}o${idx}`}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleAnswerChange(index, option)}
                />
                <label
                  htmlFor={`q${index}o${idx}`}
                  className={`${selectedAnswers[index] === option ? 'selected' : ''} ${score !== null ? (answerStates[index] === 'correct' && selectedAnswers[index] === option ? 'correct' : answerStates[index] === 'incorrect' && selectedAnswers[index] === option ? 'incorrect' : '') : ''}`}
                >
                  {option}
                </label>
              </div>
            ))}
            {q.type === 'echelle' && [1, 2, 3, 4, 5].map((value) => (
              <div key={value}>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={value}
                  id={`q${index}v${value}`}
                  checked={selectedAnswers[index] === value.toString()}
                  onChange={() => handleAnswerChange(index, value.toString())}
                />
                <label
                  htmlFor={`q${index}v${value}`}
                  className={`${selectedAnswers[index] === value.toString() ? 'selected' : ''} ${score !== null ? (answerStates[index] === 'correct' && selectedAnswers[index] === value.toString() ? 'correct' : answerStates[index] === 'incorrect' && selectedAnswers[index] === value.toString() ? 'incorrect' : '') : ''}`}
                >
                  {value}
                </label>
              </div>
            ))}
            {q.type === 'ouverte' && (
              <textarea
                name={`question${index}`}
                value={selectedAnswers[index] || ''}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
      {score === null ? (
        <button onClick={handleSubmit} className="submit-btn">Soumettre</button>
      ) : (
        <button onClick={startTest} className="restart-btn">Reprendre le Test</button>
      )}
    </div>
  );
};

export default PersonalityTest;
