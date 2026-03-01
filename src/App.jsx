import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    date: 'Sep 4, 2024',
    title: 'We Added Each Other',
    text: 'Rudra added me on Snapchat, and I added him back. Just a small tap that quietly changed everything.',
  },
  {
    date: 'Sep 8, 2024',
    title: 'First Message',
    text: 'He messaged me for the first time, after waiting and watching my face snaps.',
  },
  {
    date: 'Sep 9, 2024',
    title: 'You Are Beautiful',
    text: 'We talked more. He told me he found me beautiful and wanted to take our friendship further.',
  },
  {
    date: 'Sep 10, 2024',
    title: 'First "I Love You"',
    text: 'After a deep conversation, he said “I love you” for the very first time.',
  },
  {
    date: 'Sep 14, 2024',
    title: 'First Meeting in Faridabad',
    text: 'We met in Faridabad and spent 6–7 hours together in the car. Our very first real-world meeting.',
  },
  {
    date: 'Sep 15, 2024',
    title: 'Couldn\'t Wait To See Me',
    text: 'He kept saying he wanted to meet again—and then he surprised me by coming over.',
  },
  {
    date: 'Sep 19, 2024',
    title: 'Office Visit',
    text: 'He visited me for the first time at my office. A normal day suddenly felt special.',
  },
  {
    date: 'Oct 17, 2024',
    title: 'First Movie Date',
    text: 'We went on our first movie date together. Just us, the dark hall, and stolen glances.',
  },
  {
    date: 'Oct 21, 2024',
    title: 'Rose in Faridabad',
    text: 'I went to Faridabad for college, and Rudra surprised me with a rose.',
  },
  {
    date: 'Dec 12–13, 2024',
    title: 'The Plans We Missed',
    text: 'We had planned to meet, but I fell ill and he had an accident. We couldn\'t meet, but we still held on.',
  },
  {
    date: 'Jan 4, 2025',
    title: 'Our First Night Together',
    text: 'We met again outside, for an overnight stay—our first night together.',
  },
  {
    date: 'Mar 18, 2025',
    title: 'Birthday Surprise',
    text: 'He surprised me for my birthday, and we got drunk together for the first time.',
  },
  {
    date: 'Jun 1, 2025',
    title: 'Our Biggest Fight',
    text: 'We had our biggest fight, lasting 2–3 months. We didn\'t break up, but it changed us.',
  },
  {
    date: 'Oct–Nov 2025',
    title: 'Closer Again',
    text: 'Things slowly smoothed out, and we grew even closer than before.',
  },
  {
    date: 'Dec 5, 2025',
    title: 'Dreams of Japan',
    text: 'I encouraged him to go to Japan for a better future—because I wanted his dreams to come true.',
  },
  {
    date: 'Dec 6, 2025',
    title: 'He Decided To Go',
    text: 'He decided he would go. Scary, exciting, and so real.',
  },
  {
    date: 'Feb 27, 2026',
    title: 'COE Arrived',
    text: 'He received his COE for Japan, and now he\'s planning his move miles away.',
  },
];

const constellationMemories = [
  {
    x: 0.2,
    y: 0.3,
    title: 'First Call That Lasted All Night',
    date: '2023',
    text: "We didn't notice how late it was, the world narrowed down to you and me.",
    image: 'assets/images/memory-1.jpg',
  },
  {
    x: 0.6,
    y: 0.15,
    title: 'That One Perfect Walk',
    date: '2024',
    text: 'The air was cold, your hand was warm, and everything felt right.',
    image: 'assets/images/memory-2.jpg',
  },
  {
    x: 0.8,
    y: 0.5,
    title: 'We Laughed Until We Cried',
    date: '2024',
    text: "I knew then: you weren't just someone, you were my person.",
    image: 'assets/images/memory-3.jpg',
  },
];

const openWhenLetters = [
  {
    label: "Open when you're sad",
    text: 'If it feels heavy today, let my words hold a little of the weight for you.',
  },
  {
    label: "Open when you miss me",
    text: 'Look at the sky. Somewhere under the same sky, I am thinking of you too.',
  },
  {
    label: "Open when you're overthinking",
    text: 'Come back to this: you are loved, you are enough, and you are not alone.',
  },
  {
    label: 'Open when you need motivation',
    text: "You have survived every single hard day so far. I'm already proud of you.",
  },
  // extra envelopes to fill out the Timeline grid
  {
    label: 'When you remember our first chat',
    text: 'Go back to the day it all began, when a simple notification turned into a whole new world.',
  },
  {
    label: 'When you miss our calls',
    text: 'Close your eyes and hear my voice in your head, still laughing with you at 3am.',
  },
  {
    label: 'When you think of Faridabad',
    text: 'Remember those hours in the car when time didn\'t matter because you were next to me.',
  },
  {
    label: 'When you feel distant',
    text: 'Miles and cities can change, but the way I look at you in my heart never does.',
  },
  {
    label: 'When you see a rose',
    text: 'Think of that one rose and the boy who just wanted to see you smile.',
  },
  {
    label: 'When plans fall apart',
    text: 'Even on the days we couldn\'t meet, we still chose each other. That\'s what matters.',
  },
  {
    label: 'When you remember our first night',
    text: 'Two hearts, one small room, and the feeling that the world finally made sense.',
  },
  {
    label: 'When you think of my birthday',
    text: 'You didn\'t just show up for a day, you showed up for my whole year.',
  },
  {
    label: 'When you think of our fight',
    text: 'We broke a little, healed a little, and somehow loved each other more honestly.',
  },
  {
    label: 'When you think of Japan',
    text: 'Remember that I pushed you to fly because I always believed you were meant to shine.',
  },
  {
    label: 'When you feel guilty for leaving',
    text: 'You are not leaving me behind. You\'re building the future where we meet again stronger.',
  },
  {
    label: 'When you get your COE',
    text: 'Hold that paper and know that somewhere I am bursting with pride for you.',
  },
  {
    label: 'When you feel lonely there',
    text: 'Look at the night sky and find our stars—they still spell I LUV YOU.',
  },
  {
    label: 'When you doubt us',
    text: 'We made it through months of silence and miles of distance. We\'re not that fragile.',
  },
  {
    label: 'When you have a small win',
    text: 'Message me every tiny victory. I want to clap for all of them.',
  },
  {
    label: 'When you just miss home',
    text: 'Remember that my heart is your second home, and it\'s always waiting for you.',
  },
];

function typewriterEffect(element, text, speed = 25) {
  if (!element) return;
  element.textContent = '';
  let i = 0;
  function step() {
    if (i <= text.length) {
      element.textContent = text.slice(0, i);
      i += 1;
      requestAnimationFrame(step);
    }
  }
  step();
}

function useModal() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({ title: '', meta: '', body: '', image: '' });
  const bodyRef = useRef(null);

  const showModal = (cfg) => {
    setContent(cfg);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const el = bodyRef.current;
    if (!el) return;

    typewriterEffect(el, content.body);

    const tl = gsap.fromTo(
      '.modal-content',
      { scale: 0.9, opacity: 0, y: 40 },
      { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
    );

    return () => {
      tl.kill();
    };
  }, [open, content.body]);

  const hideModal = () => {
    gsap.to('.modal-content', {
      scale: 0.9,
      opacity: 0,
      y: 30,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => setOpen(false),
    });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') hideModal();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const modal = open ? (
    <div className="modal show" aria-hidden={!open}>
      <div className="modal-backdrop" onClick={hideModal} />
      <div className="modal-content" role="dialog" aria-modal="true">
        <div className="modal-hearts" aria-hidden="true" />
        <button className="modal-close" aria-label="Close" onClick={hideModal}>
          ×
        </button>
        {content.title && <h3 className="modal-title">{content.title}</h3>}
        {content.meta && <p className="modal-meta">{content.meta}</p>}
        <div ref={bodyRef} className="modal-body" />
        {content.image && (
          <img src={content.image} alt={content.title} className="modal-image" />
        )}
      </div>
    </div>
  ) : null;

  return { modal, showModal };
}

function useToast() {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const showToast = (msg) => {
    setMessage(msg);
    setVisible(true);
    gsap.fromTo(
      '#toast',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' },
    );
    setTimeout(() => {
      gsap.to('#toast', {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => setVisible(false),
      });
    }, 2200);
  };

  const toast = (
    <div id="toast" className="toast" hidden={!visible}>
      {message}
    </div>
  );

  return { toast, showToast };
}

const heroImages = [
  '/assets/images/WhatsApp Image 2026-03-01 at 5.00.57 PM (1).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.00.57 PM (2).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.00.57 PM (3).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.00.57 PM (4).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.00.57 PM (5).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.00.57 PM (6).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.00.57 PM (7).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.00.57 PM (8).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.00.57 PM (9).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.00.57 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (1).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (2).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (3).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (4).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (5).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (6).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (7).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (8).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (9).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (10).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (11).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (12).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (13).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.58 PM (14).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.59 PM (1).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.59 PM (2).jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.03.59 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.04.32 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.05.06 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.05.44 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.06.17 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.06.41 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.07.42 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.08.21 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.08.48 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.09.14 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.09.37 PM.jpeg',
  '/assets/images/WhatsApp Image 2026-03-01 at 5.10.07 PM.jpeg',
];

function shuffleArray(arr) {
  // mutate the provided array in-place so callers see the new order
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function HeroSection() {
  const [sizes, setSizes] = useState({});
  const [shuffleKey, setShuffleKey] = useState(0);
  const [orderedImages, setOrderedImages] = useState(() => shuffleArray([...heroImages]));
  const heroRef = useRef(null);

  useEffect(() => {
    // initialize all images as small
    const initial = {};
    heroImages.forEach((src) => {
      initial[src] = 'small';
    });
    setSizes(initial);

    const interval = setInterval(() => {
      // smooth crossfade: fade current tiles out, then update order/sizes, then fade in
      const tl = gsap.timeline();

      tl.to('.hero-flow-item', {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: 'power2.inOut',
        stagger: { amount: 0.4, from: 'random' },
        onComplete: () => {
          // 1) shuffle a working copy for new positions
          const working = [...heroImages];
          shuffleArray(working);
          setOrderedImages(working);

          // 2) decide which ones are large / medium / small based on this new order
          setSizes((prev) => {
            const next = { ...prev };
            const largeSet = new Set(working.slice(0, 5));
            const mediumSet = new Set(working.slice(5, 15));

            heroImages.forEach((src) => {
              if (largeSet.has(src)) next[src] = 'large';
              else if (mediumSet.has(src)) next[src] = 'medium';
              else next[src] = 'small';
            });

            return next;
          });

          // bump key so entry animation can re-run if needed
          setShuffleKey((k) => k + 1);
        },
      });

      tl.to('.hero-flow-item', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: { amount: 0.6, from: 'random' },
      });
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    // entry / reshuffle animation: scale up images into place
    gsap.fromTo(
      '.hero-flow-item',
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: { amount: 1.2, from: 'random' },
      },
    );
  }, [shuffleKey]);

  useEffect(() => {
    // gentle floating for all tiles (continuous)
    gsap.to('.hero-flow-item', {
      y: -12,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: { amount: 4, from: 'random' },
    });

    // pulsing scale for large images only (continuous)
    gsap.to('.hero-flow-large', {
      scale: 1.12,
      duration: 2.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // floating hearts animation (continuous)
    gsap.to('.hero-heart', {
      yPercent: -120,
      opacity: 0,
      duration: 12,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: { amount: 8, from: 'random' },
    });
  }, []);

  return (
    <header className="hero" id="hero" ref={heroRef}>
      <div className="hero-gallery hero-gallery-flow" aria-hidden="false">
        {orderedImages.map((src) => {
          const size = sizes[src] || 'small';
          return (
            <figure
              key={src}
              className={`hero-flow-item hero-flow-${size}`}
            >
              <img src={src} alt="Memory" />
            </figure>
          );
        })}
        <div className="hero-hearts" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="hero-heart"
              style={{ left: `${(i * 7) % 100}%`, animationDelay: `${i * 0.7}s` }}
            >
              ❤
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

function IntroSection() {
  return (
    <section className="section intro-section" id="intro">
      <div className="hero-overlay hero-overlay-below">
        <h1>31 Days. 31 Letters. Just For You.</h1>
        <p>A little universe of us, for you to explore.</p>
        <a href="#constellation" className="btn-primary">
          Scroll to our story
        </a>
      </div>
    </section>
  );
}

function TimelineSection() {
  useEffect(() => {
    const items = gsap.utils.toArray('.timeline-item');
    items.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
        },
        opacity: 0,
        x: index % 2 === 0 ? -60 : 60,
        duration: 0.7,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <section id="timeline" className="section timeline-section">
      <h2>Our Timeline</h2>
      <div className="timeline" id="timelineContainer">
        {timelineData.map((item) => (
          <article className="timeline-item" key={item.title}>
            <div className="timeline-dot" />
            <div className="timeline-date">{item.date}</div>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

// update loveDots so that the constellation spells "I LUV YOU" in one horizontal line
const loveDots = [
  // I
  { x: 0.05, y: 0.5 },
  { x: 0.05, y: 0.46 },
  { x: 0.05, y: 0.54 },
  // L
  { x: 0.15, y: 0.46 },
  { x: 0.15, y: 0.50 },
  { x: 0.15, y: 0.54 },
  { x: 0.19, y: 0.54 },
  { x: 0.23, y: 0.54 },
  // U (replaces O in LOVE -> LUV)
  { x: 0.31, y: 0.46 },
  { x: 0.31, y: 0.50 },
  { x: 0.31, y: 0.54 },
  { x: 0.35, y: 0.54 },
  { x: 0.39, y: 0.54 },
  { x: 0.39, y: 0.50 },
  { x: 0.39, y: 0.46 },
  // V
  { x: 0.47, y: 0.46 },
  { x: 0.49, y: 0.54 },
  { x: 0.51, y: 0.46 },
  { x: 0.49, y: 0.54 },
  // space between LUV and YOU
  // Y
  { x: 0.63, y: 0.46 },
  { x: 0.61, y: 0.42 },
  { x: 0.65, y: 0.42 },
  { x: 0.63, y: 0.54 },
  // O
  { x: 0.75, y: 0.5 },
  { x: 0.71, y: 0.50 },
  { x: 0.79, y: 0.50 },
  { x: 0.71, y: 0.46 },
  { x: 0.79, y: 0.46 },
  { x: 0.71, y: 0.54 },
  { x: 0.79, y: 0.54 },
  // U
  { x: 0.87, y: 0.46 },
  { x: 0.87, y: 0.50 },
  { x: 0.87, y: 0.54 },
  { x: 0.91, y: 0.54 },
  { x: 0.95, y: 0.54 },
  { x: 0.95, y: 0.50 },
  { x: 0.95, y: 0.46 },
];

// special love message for each "I LUV YOU" dot (37 messages, one per loveDots entry)
const loveDotMessages = [
  // I (3)
  'This tiny star is where my “I” begins—small on the outside, but full of feelings I never knew I could have for you.',
  'Whenever you look at this dot, remember: my “I” will always stand right next to “you”, no matter how far Japan is.',
  'A single point of light, but a whole universe of meaning: there is no real “me” anymore without you in it.',

  // L (5)
  'Here the L starts, just like our story did: quietly, shyly, but already changing everything inside my heart.',
  'Every step of this L is another late-night chat, another snap, another moment I fell a little more for you.',
  'This glowing point is all the times you said something simple, and I thought about it for hours, smiling.',
  'Down here the L bends—just like my life did—the moment you walked into it and refused to leave.',
  'The L ends here, but my loving you doesn’t. It just spills into the next letter and keeps going.',

  // U of LUV (7)
  'This side of U is you holding me up on the days when I didn’t even know how to stand by myself.',
  'Here in the middle of the U is where my heart waits, always ready to catch you when you feel like falling.',
  'This soft light is every “are you okay?” you asked when you could hear my smile wasn’t real.',
  'The curve is our safe place: the car talks, the calls, the hugs where the rest of the world disappears.',
  'This bright dot is a promise: even when distance stretches between us, my arms still curve back to you.',
  'Here the U rises again—like us, after every fight we thought might break us but only made us stronger.',
  'The last star of this U whispers: you are my comfort zone, my calm, my forever home.',

  // V (4)
  'This side of the V is every risk you took, chasing your dreams while still holding my heart carefully.',
  'At the lowest point of this V live our hardest days—the doubts, the silence—but we never truly let go.',
  'Here the line climbs again: all the times we chose to talk, to stay, to grow instead of giving up.',
  'The tip of this V is our victory: not perfect love, but real love that keeps choosing us again and again.',

  // Y (4)
  'This branch of Y is all the different lives we could have lived if we had never met.',
  'Here two paths split, but somehow our hearts stubbornly kept walking towards each other anyway.',
  'Where these lines meet is the moment we decided: it’s you and me, even when it’s hard, even when it’s scary.',
  'The stem of this Y holds the simplest truth: no matter where you go, my heart always points back to you.',

  // O (7)
  'This circle begins where my thoughts begin: somehow, they always loop back to your name.',
  'This dot is a memory of us laughing so hard that even the stars would’ve blushed if they could watch us.',
  'Here sit the small moments: shared food, shared silence, shared looks that said more than words ever could.',
  'This light is every “I love you” we said and every one we kept in our chest because we felt too shy.',
  'The bottom of this O holds the nights we cried but still woke up choosing each other in the morning.',
  'Around here are all the times I stared at my phone waiting for your message and felt complete when it came.',
  'This last glow completes the circle: my days begin with thoughts of you and end with dreams of you.',

  // final U (7)
  'This U is our future, holding all the days we haven’t lived yet, all the hugs we still owe each other.',
  'On this side of the U, you’re in Japan chasing your dreams, and I’m here, still your biggest fan.',
  'This soft star is every airport reunion, every tight hug after months apart that will make time disappear.',
  'Here in the curve are our voice notes, our “good mornings”, our “did you eat?” that keep us stitched together.',
  'This glowing point reminds you: oceans can’t drown what we feel; time zones can’t dim it either.',
  'This rising line is us building a life where distance becomes just another story we tell proudly someday.',
  'The final star of U says it simply and forever: I choose you, in every city, every sky, every lifetime.',
];

function ConstellationSection({ onOpenMemory }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // create a background field of soft, faded random dots
    const backgroundDots = Array.from({ length: 160 }, () => ({
      x: Math.random(),
      y: Math.random(),
      baseAlpha: 0.08 + Math.random() * 0.12,
      radius: 1 + Math.random() * 1.5,
    }));

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const time = performance.now() / 1000;

      // draw faded background stars
      backgroundDots.forEach((star) => {
        const sx = star.x * rect.width;
        const sy = star.y * rect.height;
        const twinkle = 0.4 + 0.3 * Math.sin(time * 1.5 + sx * 0.04 + sy * 0.02);
        const alpha = star.baseAlpha * twinkle;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // connect I LUV YOU dots
      ctx.strokeStyle = 'rgba(255, 180, 220, 0.45)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      loveDots.forEach((dot, index) => {
        const x = dot.x * rect.width;
        const y = dot.y * rect.height;
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // glowing I LUV YOU dots
      loveDots.forEach((dot, index) => {
        const x = dot.x * rect.width;
        const y = dot.y * rect.height;
        const twinkle = 0.6 + 0.4 * Math.sin(time * 2 + index * 0.7);
        const radius = 3 + twinkle * 2;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2.5);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(255, 200, 230, 0.9)');
        gradient.addColorStop(1, 'rgba(255, 200, 230, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- NEW: draw "Rudra" below the constellation in cursive-style text ---
      ctx.save();
      ctx.font = `${Math.max(26, rect.width * 0.05)}px 'Lucida Handwriting', 'Segoe Script', 'Brush Script MT', cursive`;
      ctx.fillStyle = 'rgba(255, 220, 240, 0.9)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';

      // position slightly below the I LUV YOU line
      const rudraY = rect.height * 0.66;
      ctx.shadowColor = 'rgba(255, 150, 210, 0.6)';
      ctx.shadowBlur = 14;
      ctx.fillText('Rudra', rect.width / 2, rudraY);
      ctx.restore();

      requestAnimationFrame(render);
    };

    render();

    const handleClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const cx = event.clientX - rect.left;
      const cy = event.clientY - rect.top;

      let bestIndex = -1;
      let bestDist = Infinity;
      loveDots.forEach((dot, index) => {
        const dx = cx - dot.x * rect.width;
        const dy = cy - dot.y * rect.height;
        const d = Math.hypot(dx, dy);
        if (d < bestDist) {
          bestDist = d;
          bestIndex = index;
        }
      });

      if (bestIndex !== -1 && bestDist < 24) {
        const body = loveDotMessages[bestIndex] || '';
        onOpenMemory({
          title: '',
          meta: '',
          body,
          image: '',
        });
      }
    };

    canvas.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('click', handleClick);
    };
  }, [onOpenMemory]);

  return (
    <section id="constellation" className="section constellation-section">
      <h2>Memory Constellation</h2>
      <p className="constellation-subtext">A sky of dots that secretly spells out I LOVE YOU. Tap a glowing star to see a memory.</p>
      <canvas ref={canvasRef} id="constellationCanvas" />
    </section>
  );
}

function CalendarSection({ onOpenLetter, onLocked }) {
  const [messages, setMessages] = useState({});
  const [loadedDays, setLoadedDays] = useState({});

  const today = new Date();
  const currentYear = today.getFullYear();
  const marchIndex = 2;

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  useEffect(() => {
    days.forEach((day) => {
      const key = String(day).padStart(2, '0');
      const url = `/assets/messages/${key}.json`;
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error('not found');
          return res.json();
        })
        .then((data) => {
          setMessages((prev) => ({ ...prev, [day]: data.message || '' }));
          setLoadedDays((prev) => ({ ...prev, [day]: true }));
        })
        .catch(() => {
          setLoadedDays((prev) => ({ ...prev, [day]: false }));
        });
    });
  }, []);

  return (
    <section id="calendar" className="section calendar-section">
      <h2>March Letters</h2>
      <div className="calendar-grid" id="calendarGrid">
        {days.map((day) => {
          const date = new Date(currentYear, marchIndex, day);
          const isUnlockable = today >= date;
          const hasMessage = loadedDays[day] && typeof messages[day] === 'string';

          const handleClick = () => {
            if (!isUnlockable) {
              onLocked();
              return;
            }

            if (!hasMessage) {
              onOpenLetter({
                title: `March ${day}`,
                meta: '31 days, 31 letters',
                body: "I'm still writing this day for you. That's how much I care.",
              });
              return;
            }

            onOpenLetter({
              title: `March ${day}`,
              meta: '31 days, 31 letters',
              body: messages[day],
            });
          };

          return (
            <button
              type="button"
              key={day}
              className={`calendar-day${isUnlockable ? '' : ' locked'}`}
              onClick={handleClick}
            >
              <span>{day}</span>
              {!isUnlockable && <span className="calendar-lock">🔒</span>}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function OpenWhenSection({ onOpen }) {
  const [timelineLetters, setTimelineLetters] = useState([]);

  useEffect(() => {
    fetch('/assets/timeline.json')
      .then((res) => {
        if (!res.ok) throw new Error('failed');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setTimelineLetters(data);
      })
      .catch(() => {
        setTimelineLetters([]);
      });
  }, []);

  return (
    <section id="open-when" className="section open-when-section">
      <h2>Timeline</h2>
      <div className="open-when-grid" id="openWhenGrid">
        {timelineLetters.map((item, index) => (
          <article
            key={`${item.date}-${index}`}
            className="envelope-card"
            onClick={() => {
              onOpen({
                title: `${item.date} — ${item.title}`,
                meta: 'Our story so far',
                body: item.text,
              });
            }}
          >
            <div className="envelope-flap" />
            <div className="envelope-label">
              <div>{item.date}</div>
              <div>{item.title}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section id="future" className="section future-section">
      <p className="future-main-text future-note">
        I am there for you in bright and dark, in day and night, in black or white, to the moon and back, and I love you today, tomorrow, and forever. I will continue to make you feel special every single day till I breathe.
        <br />
        <br />
        <span className="future-signoff">yours, Sibbi</span>
      </p>
      <div className="floating-hearts" aria-hidden="true" />
    </section>
  );
}

function App() {
  const { modal, showModal } = useModal();
  const { toast, showToast } = useToast();
  const [musicOn, setMusicOn] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const bgRef = useRef(null);
  const secretRef = useRef(null);

  useEffect(() => {
    const audio = bgRef.current;
    if (!audio) return;
    if (musicOn) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [musicOn]);

  const handleSecretClick = () => {
    const audio = secretRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
    showToast('You found my secret.');
  };

  const handlePasswordSubmit = (value) => {
    if (value === '2409') {
      setIsUnlocked(true);
    } else {
      showToast("That isn't the right password, my love. Try again.");
    }
  };

  return (
    <>
      <div
        className="bg-music-toggle"
        id="musicToggle"
        onClick={() => setMusicOn((v) => !v)}
      >
        ♪
      </div>
      <audio ref={bgRef} id="bgMusic" loop>
        <track kind="captions" />
      </audio>

      {!isUnlocked ? (
        <PasswordGate onSubmit={handlePasswordSubmit} />
      ) : (
        <>
          <HeroSection />
          <IntroSection />
          <main>
            <ConstellationSection onOpenMemory={showModal} />
            <CalendarSection
              onOpenLetter={showModal}
              onLocked={() => showToast('Wait for the day to come ❤️')}
            />
            <OpenWhenSection onOpen={showModal} />
            <FutureSection />
          </main>
        </>
      )}

      {modal}

      <button
        id="secretDot"
        className="secret-dot"
        type="button"
        onClick={handleSecretClick}
        aria-label="Secret feature"
      />
      <audio ref={secretRef} id="secretAudio">
        <track kind="captions" />
      </audio>

      {toast}
    </>
  );
}

function PasswordGate({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSubmit(value.trim());
  };

  return (
    <div className="password-gate">
      <div className="password-gate-backdrop" />
      <div className="password-gate-dialog">
        <div className="password-gate-hearts" aria-hidden="true" />
        <p className="password-gate-title">Hii Mr Rudra Pratap Choudhary!</p>
        <p className="password-gate-text">
          Welcome to this small token of love....
          <br />
          Enter the password to step inside our little universe.
        </p>
        <div className="password-gate-input-row">
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="password-gate-input"
            placeholder="Enter password"
          />
          <button
            type="button"
            className="password-gate-button"
            onClick={() => onSubmit(value.trim())}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
