import logoWenoven from './assets/logo_wenoven_new.png'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Brain, 
  Lightbulb, 
  Cog, 
  TrendingUp, 
  GraduationCap, 
  Headphones,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Users,
  CheckCircle
} from 'lucide-react'
import './App.css'
import AssistantIA from './components/ui/assistant-ia.jsx'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Diagnostic IA et stratégie",
      description: "Audit complet, cartographie des cas d'usage et feuille de route personnalisée pour intégrer l'IA dans votre organisation",
      features: ["Audit des processus existants", "Identification des opportunités IA", "Roadmap stratégique", "Analyse ROI"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Prompt Academy",
      description: "Formations expertes à l'art du prompt engineering avec ChatGPT, Midjourney, Copilot et autres outils d'IA générative",
      features: ["Ateliers pratiques", "Formation sur mesure", "Support continu"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Prototypage / PoC IA",
      description: "Ateliers design thinking, création de prototypes rapides et évaluation concrète du retour sur investissement",
      features: ["Design thinking workshops", "Prototypes fonctionnels", "Tests utilisateurs", "Mesure d'impact"]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Conformité & Gouvernance",
      description: "Accompagnement RGPD, AI Act et mise en place d'une gouvernance responsable des données et algorithmes",
      features: ["Conformité réglementaire", "Gouvernance des données", "Éthique IA", "Risk management"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Conduite du changement",
      description: "Accompagnement des équipes, communication interne et adoption progressive des solutions d'IA générative",
      features: ["Change management", "Formation des équipes", "Communication interne", "Suivi d'adoption"]
    }
  ]

  const useCases = [
    {
      title: "Génération de Contenu",
      description: "Automatisez la création de contenu marketing et juridique, adaptez à chaque segment cible, automatisez l'A/B testing",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Support client augmenté",
      description: "Adaptez dynamiquement les réponses au profil de votre client, prenant en compte l'historique des interactions, intégrez les données CRM en temps réel",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Automatisation de Code",
      description: "Accélérez le développement avec la génération de code intelligente",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Optimisation des processus",
      description: "Accélérez la recherche d'informations, automatisez les tâches administratives, analysez des données massives",
      icon: <Users className="w-6 h-6" />
    }
  ]

  const testimonials = [
    {
      quote: "L'équipe a transformé notre approche d'interraction avec ChatGPT et Microsoft Copilot 365. Nous avons amélioré la qualité de nos rendus et appris à bien analyser les résultats.",
      name: "Babacar D.",
      title: "Responsable Reporting Factory, Forvia"
    },
    {
      quote: "Grâce à l'expertise de l'équipe, nous avons pu intégrer l'IA générative dans nos processus de développement en seulement 1 mois. Un accompagnement exceptionnel.",
      name: "Pierre Martin",
      title: "CTO, StartupAI"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Assistant IA */}
      <AssistantIA />
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={logoWenoven} alt="Wenoven Logo" className="h-16" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
              <a href="#use-cases" className="text-gray-300 hover:text-purple-400 transition-colors">Cas d'usage</a>
              <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">Témoignages</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" onClick={() => window.open("https://calendly.com/fmoraux-wenoven/30min", "_blank")}>
              Démarrer votre projet
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transformez votre entreprise avec 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> l'IA générative</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Nous vous accompagnons dans l'implémentation de solutions d'intelligence artificielle générative 
              sur mesure pour révolutionner vos processus métier et créer de nouvelles opportunités.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                Découvrir nos services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg" onClick={() => window.open("https://calendly.com/fmoraux-wenoven/30min", "_blank")}>
                Planifier une consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Une gamme complète de services pour vous accompagner dans votre transformation IA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              L'IA générative <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">en action</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez comment l'IA générative transforme les entreprises dans tous les secteurs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {useCase.icon}
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ce que disent nos <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">clients</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-purple-500/20">
                <CardContent className="pt-6">
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à révolutionner votre entreprise ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Commencez votre transformation IA dès aujourd'hui avec nos experts
          </p>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg" onClick={() => window.open("https://calendly.com/fmoraux-wenoven/30min", "_blank")}>
            Commencer maintenant
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={logoWenoven} alt="Wenoven Logo" className="h-16" />
              </div>
              <p className="text-gray-400">
                Votre partenaire de confiance pour l'implémentation de solutions d'IA générative.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Diagnostic IA et stratégie</li>
                <li>Prompt Academy</li>
                <li>Prototypage / PoC IA</li>
                <li>Conformité & Gouvernance</li>
                <li>Conduite du changement</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
                <li><a href="#use-cases" className="hover:text-purple-400 transition-colors">Cas d'usage</a></li>
                <li><a href="#testimonials" className="hover:text-purple-400 transition-colors">Témoignages</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@wenoven.fr</li>
                <li>Paris, France</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Wenoven. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

