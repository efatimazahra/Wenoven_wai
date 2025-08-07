import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const questions = [
  {
    key: 'secteur',
    label: 'Dans quel secteur évoluez-vous ?'
  },
  {
    key: 'problematique',
    label: 'Quelle est votre problématique principale ?'
  },
  {
    key: 'objectif',
    label: 'Quel est votre objectif avec l\'IA ?'
  },
  {
    key: 'email',
    label: 'Votre adresse email pour vous recontacter ?'
  }
];

export default function AssistantIA() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [input, setInput] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSend = () => {
    if (input.trim() === '') return;
    const newAnswers = { ...answers, [questions[step].key]: input };
    setAnswers(newAnswers);
    setInput('');
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowSummary(true);
      // Ouvre Calendly
      window.open('https://calendly.com/fmoraux-wenoven/30min', '_blank');
      // Envoie l'email
      sendEmail(newAnswers);
    }
  };

  const sendEmail = (data) => {
    // Remplacez par vos propres identifiants EmailJS
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';
    const templateParams = {
      to_email: 'fmoraux.wenoven@gmail.com',
      secteur: data.secteur,
      problematique: data.problematique,
      objectif: data.objectif,
      email: data.email
    };
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => setEmailSent(true))
      .catch(() => setEmailSent(false));
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setInput('');
    setShowSummary(false);
    setEmailSent(false);
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg p-4 hover:scale-105 transition-transform"
        onClick={() => setOpen(true)}
        style={{ display: open ? 'none' : 'block' }}
        aria-label="Ouvrir l'assistant IA"
      >
        🤖
      </button>
      {/* Fenêtre de chat */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 bg-slate-900 border border-purple-500/40 rounded-xl shadow-2xl flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
            <span className="font-bold text-white">Assistant IA</span>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-pink-400">✕</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto" style={{ maxHeight: 320 }}>
            {!showSummary ? (
              <>
                {questions.slice(0, step).map((q, idx) => (
                  <div key={q.key} className="mb-2">
                    <div className="text-purple-300 text-sm">{q.label}</div>
                    <div className="bg-slate-800 text-white rounded p-2 mt-1 text-sm">{answers[q.key]}</div>
                  </div>
                ))}
                <div className="mb-2">
                  <div className="text-purple-300 text-sm">{questions[step].label}</div>
                  <input
                    className="w-full mt-1 p-2 rounded bg-slate-800 text-white border border-purple-500/30 focus:outline-none focus:border-pink-400"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="Votre réponse..."
                    autoFocus
                  />
                </div>
              </>
            ) : (
              <div className="text-white text-sm space-y-2">
                <div className="font-semibold mb-2">Résumé de votre besoin :</div>
                <div><span className="text-purple-300">Secteur :</span> {answers.secteur}</div>
                <div><span className="text-purple-300">Problématique :</span> {answers.problematique}</div>
                <div><span className="text-purple-300">Objectif :</span> {answers.objectif}</div>
                <div><span className="text-purple-300">Email :</span> {answers.email}</div>
                {emailSent && <div className="text-green-400 mt-2">Email envoyé à l'équipe Wenoven !</div>}
                <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded p-2" onClick={handleRestart}>Recommencer</button>
              </div>
            )}
          </div>
          {!showSummary && (
            <div className="p-4 border-t border-purple-500/20">
              <button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded p-2 disabled:opacity-50"
                onClick={handleSend}
                disabled={input.trim() === ''}
              >
                Envoyer
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
} 