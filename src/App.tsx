import React, { useEffect, useState } from 'react';
import { ChevronDown, Eye, Star, TrendingUp, Users, Zap, ArrowRight, X, Play, MessageCircle, Instagram, Send, Shield, Gift, CheckCircle } from 'lucide-react';
import { portfolioData } from './data/portfolio';

function App() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const smoothScroll = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const toggleVideo = (workId: number) => {
    setPlayingVideos(prev => ({
      ...prev,
      [workId]: !prev[workId]
    }));
  };

  // Разделяем работы на статичные и анимированные
  const staticWorks = portfolioData.filter(work => !work.isAnimated);
  const motionWorks = portfolioData.filter(work => work.isAnimated);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="grid-pattern w-full h-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <img 
                  src="https://i.postimg.cc/3wTYjHY9/image.jpg"
                  alt="Дизайнер"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-200 to-red-400 bg-clip-text text-transparent leading-tight">
            <span className="animate-slide-in-left">Продающий дизайн карточек</span>
            <br />
            <span className="text-red-500 animate-slide-in-right">для Wildberries и Ozon</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Помогаю товарам выделяться на фоне конкурентов и продавать больше 
            за счёт сильного визуала и анимации
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <button 
              onClick={() => smoothScroll('portfolio')}
              className="glass-button px-8 py-4 flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              Смотреть работы
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => smoothScroll('contact')}
              className="glass-button px-8 py-4 flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              Заказать дизайн
              <Zap className="w-5 h-5" />
            </button>
          </div>

          <button 
            onClick={() => smoothScroll('problem-solution')}
            className="mt-16 animate-float flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 mx-auto"
          >
            <span className="mb-2">Узнать больше</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4" data-animate>
        <div className="max-w-4xl mx-auto">
          <div className={`glass-card p-12 transform transition-all duration-700 ${isVisible['about'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-red-500 to-pink-500 p-1 animate-rotate-in hover-glow-intense">
                  <img 
                    src="https://i.postimg.cc/3wTYjHY9/image.jpg"
                    alt="О дизайнере"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-4xl font-bold mb-6 text-reveal">
                  Кто <span className="text-red-500">я</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Дизайнер с 3+ годами опыта в создании продающих карточек товаров для маркетплейсов. 
                  Специализируюсь на Wildberries и Ozon, создал более 500+ успешных дизайнов.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Мой подход — не просто красивая картинка, а инструмент продаж. Каждый элемент 
                  дизайна работает на конверсию и выделение товара среди конкурентов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-4" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-700 ${isVisible['advantages'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Креативность */}
            <div className="glass-card p-8 bg-gradient-to-br from-gray-900 to-black border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Креативность</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Я постоянно анализирую дизайны конкурентов и слежу трендам, 
                    чтобы создавать стильный и уникальный дизайн для ваших товаров.
                  </p>
                </div>
              </div>
            </div>

            {/* Безопасность */}
            <div className="glass-card p-8 bg-gradient-to-br from-blue-600 to-blue-800 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Безопасность</h3>
                  <p className="text-white/90 leading-relaxed">
                    Я работаю исключительно с премиальными изображениями 
                    с платных фотостоков, чтобы гарантировать легальность контента 
                    и избежать юридических рисков.
                  </p>
                </div>
              </div>
            </div>

            {/* Скидка 10% */}
            <div className="glass-card p-8 bg-gradient-to-br from-blue-600 to-blue-800 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gift className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Скидка 10%</h3>
                  <p className="text-white/90 leading-relaxed">
                    Если закажете 7+ слайдов, 
                    по промокоду «Ernest09» 
                    то я предоставлю скидку 
                    в размере 10% на ваш 
                    первый заказ!
                  </p>
                </div>
              </div>
            </div>

            {/* Всегда в сроки */}
            <div className="glass-card p-8 bg-gradient-to-br from-gray-900 to-black border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Всегда в сроки!</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Я гарантированно соблюдаю 
                    сроки выполнения заказов и 
                    оперативно отвечаю на все 
                    сообщения клиентов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section id="problem-solution" className="py-20 px-4" data-animate>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-reveal">
            Превращаю проблемы в <span className="text-red-500">решения</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`glass-card p-8 border-l-4 border-red-500 transform transition-all duration-700 ${isVisible['problem-solution'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-6 text-red-400">❌ Проблемы</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Карточки сливаются с конкурентами</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>CTR низкий, товар не замечают</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Визуал не вызывает доверия к бренду</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Скучный дизайн отпугивает покупателей</span>
                </li>
              </ul>
            </div>

            <div className={`glass-card p-8 border-l-4 border-green-500 transform transition-all duration-700 delay-200 ${isVisible['problem-solution'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-6 text-green-400">✅ Решения</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Карточки цепляют с первых секунд</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Анимация выделяет товар среди других</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Визуал поднимает ценность продукта</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Современный дизайн притягивает взгляд</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-20 px-4" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-reveal">
              Примеры моих <span className="text-red-500">работ</span>
            </h2>
          </div>

          {/* Десктопная версия */}
          <div className={`hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transform transition-all duration-1000 ${isVisible['portfolio'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {staticWorks.map((work, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Мобильная версия */}
          <div className="md:hidden mobile-portfolio-grid">
            {staticWorks.map((work, index) => (
              <div key={index} className="mobile-portfolio-card">
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motion Design Section */}
      <section id="motion-design" className="py-20 px-4" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-reveal">
              Моушн <span className="text-red-500">дизайн</span>
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in-up">
              Анимированные карточки товаров, которые привлекают внимание
            </p>
          </div>

          {/* Десктопная версия */}
          <div className={`hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transform transition-all duration-1000 ${isVisible['motion-design'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {motionWorks.map((work, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] rounded-xl overflow-hidden group hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {playingVideos[work.id] ? (
                  <iframe
                    src={work.fullImage}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div 
                    className="relative cursor-pointer w-full h-full"
                    onClick={() => toggleVideo(work.id)}
                  >
                    <img
                      src={work.thumbnail}
                      alt={work.title}
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                      <Play className="w-12 h-12 text-white drop-shadow-lg animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Мобильная версия */}
          <div className="md:hidden mobile-portfolio-grid">
            {motionWorks.map((work, index) => (
              <div key={index} className="mobile-portfolio-card">
                {playingVideos[work.id] ? (
                  <iframe
                    src={work.fullImage}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div 
                    className="relative cursor-pointer w-full h-full"
                    onClick={() => toggleVideo(work.id)}
                  >
                    <img
                      src={work.thumbnail}
                      alt={work.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4" data-animate>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-reveal">
            Что получают мои <span className="text-red-500">клиенты</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Больше кликов', desc: 'Рост CTR благодаря цепляющему дизайну' },
              { icon: Star, title: 'CTR в 1.5 раза', desc: 'Увеличение кликабельности карточек' },
              { icon: Users, title: 'Рост доверия', desc: 'Профессиональный вид повышает конверсию' },
            ].map((result, index) => (
              <div
                key={index}
                className={`glass-card p-8 text-center transform transition-all duration-700 shimmer-effect ${isVisible['results'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <result.icon className="w-12 h-12 text-red-500 mx-auto mb-4 animate-float" />
                <h3 className="text-2xl font-bold mb-2">{result.title}</h3>
                <p className="text-gray-300">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4" data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-reveal">
            Хочешь, чтобы твой товар <span className="text-red-500">продавал?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up">
            Создам дизайн, который выделит твой товар среди тысяч конкурентов и 
            заставит покупателей обратить внимание именно на него
          </p>

          {/* Social Media Section */}
          <div className={`mb-12 transform transition-all duration-700 ${isVisible['contact'] ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-8 text-gray-300 animate-scale-in">Связаться со мной</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <a
                href="https://t.me/ernestdesignn"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-4 transition-all duration-300 group border-cyan-400/30 hover:border-cyan-400/60 hover:bg-cyan-400/10 animate-slide-in-left"
              >
                <div className="text-center w-full">
                  <h4 className="font-semibold text-white">Telegram</h4>
                  <p className="text-sm text-cyan-300">@ernestdesignn</p>
                </div>
              </a>

              <a
                href="https://vk.com/ernestdesigner"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-4 transition-all duration-300 group border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 animate-slide-in-left"
                style={{ animationDelay: '200ms' }}
              >
                <div className="text-center w-full">
                  <h4 className="font-semibold text-white">ВКонтакте</h4>
                  <p className="text-sm text-blue-300">ernestdesigner</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/ernest00079?igsh=MWJpZHZna3ZvMmljMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-4 transition-all duration-300 group border-pink-400/30 hover:border-pink-400/60 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:via-red-400/10 hover:to-purple-400/10 animate-slide-in-right"
                style={{ animationDelay: '400ms' }}
              >
                <div className="text-center w-full">
                  <h4 className="font-semibold text-white">Instagram</h4>
                  <p className="text-sm bg-gradient-to-r from-yellow-400 via-red-400 to-purple-400 bg-clip-text text-transparent">@ernest00079</p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@Ernest-s8y"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-4 transition-all duration-300 group border-red-500/30 hover:border-red-500/60 hover:bg-red-500/10 animate-slide-in-right"
                style={{ animationDelay: '600ms' }}
              >
                <div className="text-center w-full">
                  <h4 className="font-semibold text-white">YouTube</h4>
                  <p className="text-sm text-red-300">@Ernest-s8y</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Navigation */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-white animate-slide-in-left">Навигация</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => smoothScroll('about')}
                      className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                    >
                      Кто я
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => smoothScroll('problem-solution')}
                      className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                    >
                      Проблема → Решение
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => smoothScroll('portfolio')}
                      className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                    >
                      Портфолио
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => smoothScroll('motion-design')}
                      className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                    >
                      Моушн-дизайн
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => smoothScroll('results')}
                      className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                    >
                      Результаты
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => smoothScroll('contact')}
                      className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                    >
                      Контакты
                    </button>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Контакты</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="text-red-500">Телефон:</span>
                    <br />
                    <a 
                      href="tel:+79780700627" 
                      className="hover:text-red-500 transition-colors duration-300"
                    >
                      +7 978 070 06 27
                    </a>
                  </p>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Правовая информация</h3>
                <div className="space-y-2">
                  <a 
                    href="https://telegra.ph/Politika-konfidencialnosti-07-29-14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-red-500 transition-colors duration-300"
                  >
                    Политика конфиденциальности
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Эрнест. Все работы защищены авторским правом. Копирование запрещено.
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;