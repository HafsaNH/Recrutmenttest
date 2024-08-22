import React, { useState, useEffect, useRef } from 'react';
import '../../scss/pages/LanguageTest.scss';
const toutesLesQuestions = [
  // Questions à Choix Multiples (QCM)
  { type: 'qcm', question: 'Quel est le temps verbal utilisé dans la phrase: "Je suis allé au marché hier"?', options: ['Présent', 'Passé composé', 'Futur'], correct: 'Passé composé' },
  { type: 'qcm', question: 'Choisissez la bonne traduction pour "apple" en français:', options: ['Pomme', 'Banane', 'Orange'], correct: 'Pomme' },
  { type: 'qcm', question: 'Complétez la phrase: "Si j’avais su, je ______ parti plus tôt."', options: ['serais', 'serait', 'suis'], correct: 'serais' },
  { type: 'qcm', question: 'Quel est l’antonyme de "rapide"?', options: ['Lent', 'Vif', 'Précis'], correct: 'Lent' },
  { type: 'qcm', question: 'Quelle est la forme correcte de l’adjectif dans la phrase: "Cette robe est ______ que celle-là."', options: ['plus belle', 'plus belle que', 'la plus belle'], correct: 'plus belle' },

  // Échelle de Notation
  { type: 'echelle', question: 'Sur une échelle de 1 à 5, combien êtes-vous à l’aise avec les temps verbaux en français ?', correct: '5' },
  { type: 'echelle', question: 'Évaluez votre niveau de compréhension orale en français sur une échelle de 1 à 5 ?', correct: '4' },

  // Questions Ouvertes
  { type: 'ouverte', question: 'Rédigez un paragraphe de 50 à 100 mots sur vos vacances préférées.', correct: '' },
  { type: 'ouverte', question: 'Expliquez la différence entre les temps du passé en français.', correct: '' }
];

const getQuestionsAleatoires = (nombreQuestions) => {
  const questionsMelangees = toutesLesQuestions.sort(() => Math.random() - 0.5);
  return questionsMelangees.slice(0, nombreQuestions);
};

const LanguageTest = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(300);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // État pour suivre les réponses sélectionnées
  const [answerStates, setAnswerStates] = useState({}); // État pour suivre les états des réponses
  const timerRef = useRef(null);

  useEffect(() => {
    startTest();
    return () => clearInterval(timerRef.current);
  }, []);

  const startTest = () => {
    setQuestions(getQuestionsAleatoires(10));
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

    setScore(Math.min(calculatedScore, 100));
    setAnswerStates(newAnswerStates);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="language-test">
      <div className="header">
        <h1>Test de Langue</h1>
        {score !== null && <p className="score">Votre score est: <span>{score}</span> / 100</p>}
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

export default LanguageTest;
