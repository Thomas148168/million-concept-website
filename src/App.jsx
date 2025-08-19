import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Clock, Palette, Wrench, Star, ChevronDown } from 'lucide-react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[id]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section id="hero" className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
            15+ Years of Local Excellence
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Show Up Big.<br />
            <span className="text-blue-600">We'll Handle the Art,</span><br />
            Setup, and Every Detail.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We know you don't have time for trial and error. That's why we bring 15+ years of local, 
            print-perfect execution—so you show up proud, on time, and stress-free.
          </p>
          
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Let's Plan Your Event
          </Button>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className={`py-20 px-4 transition-all duration-1000 delay-200 ${isVisible.problem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              When everyone's looking, you need more than pretty — 
              <span className="text-blue-600"> you need perfect.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-red-50 border-red-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-red-600 mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Late Deliveries</h3>
                <p className="text-slate-600">Missing deadlines when it matters most</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-orange-50 border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-orange-600 mb-4">
                  <Palette className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Off-Brand Colors</h3>
                <p className="text-slate-600">Colors that don't match your vision</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-yellow-50 border-yellow-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-yellow-600 mb-4">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Rushed Installations</h3>
                <p className="text-slate-600">Poor execution under pressure</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Whether you're launching a product, curating a collection, or representing your brand at a major showcase — 
              you can't afford mismatched details, delays, or things "looking better in the mockup."
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className={`py-20 px-4 bg-white transition-all duration-1000 delay-300 ${isVisible.solution ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              We help you pull it off — 
              <span className="text-blue-600">beautifully, locally, and fast.</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Million Concept partners with corporate teams, brands, artists, and collectors to turn blank spaces into powerful visual stories.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              From art installations to branded showcases, our Hong Kong-based workshop and 15+ years of color management expertise 
              mean what you imagined is exactly what gets delivered — even under tight timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className={`py-20 px-4 transition-all duration-1000 delay-400 ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              You'll Be <span className="text-blue-600">Proud to Present</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Perfect Color, Every Time</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our in-house print and color team ensures every detail matches your brand or artist vision.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Built for the Real World</h3>
                <p className="text-slate-600 leading-relaxed">
                  We design and install with onsite conditions in mind — no last-minute surprises.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Rush Ready Without Compromise</h3>
                <p className="text-slate-600 leading-relaxed">
                  Because we manufacture locally, we can say "yes" when others say "too late."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 px-4 bg-slate-50 transition-all duration-1000 delay-500 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Trusted by Teams Who <span className="text-blue-600">Can't Afford Mistakes</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Million Concept pulled off a full installation in just days — and nailed our brand colors exactly."
                </p>
                <div className="text-sm text-slate-500">— Corporate Client</div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Everything looked better than we imagined. We didn't have to micromanage a thing."
                </p>
                <div className="text-sm text-slate-500">— Art Collector</div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "They get both the creative side and the logistics — rare to find in one team."
                </p>
                <div className="text-sm text-slate-500">— Brand Manager</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`py-20 px-4 bg-white transition-all duration-1000 delay-600 ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Can you handle custom or unusual requests?
                </h3>
                <p className="text-slate-600">
                  Absolutely. That's our specialty. We build everything in-house, so we can adapt fast.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  What if I don't know exactly what I want yet?
                </h3>
                <p className="text-slate-600">
                  No problem — we'll help you shape your vision and suggest what works best for your goals and timeline.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Do you only work in Hong Kong?
                </h3>
                <p className="text-slate-600">
                  We're based here, but we've supported regional showcases across Asia. Let's talk about what's possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className={`py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 transition-all duration-1000 delay-700 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to showcase your work without the stress?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8">
            Don't gamble on last-minute vendors. Work with the team who gets it right — fast.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Let's Plan Your Event
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-center">
        <p className="text-slate-400">
          © 2024 Million Concept. Bringing your vision to life with precision and care.
        </p>
      </footer>
    </div>
  )
}

export default App

