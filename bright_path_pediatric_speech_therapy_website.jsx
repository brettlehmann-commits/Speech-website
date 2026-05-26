/*
BRIGHT PATH WEBSITE — RECOMMENDED PROJECT STRUCTURE

bright-path-website/
├── public/
│   ├── logo.png
│   ├── headshot.png
│   └── favicon.ico
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md

-----------------------------------
SETUP INSTRUCTIONS
-----------------------------------

1. Create project:

npm create vite@latest bright-path-website -- --template react

2. Install dependencies:

npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

3. Replace files:

- Replace src/App.jsx with this file
- Add your REAL logo to:
  public/logo.png

- Add your REAL headshot to:
  public/headshot.png

4. Update image paths:

Change:
const logo = '...';
const headshot = '...';

To:
const logo = '/logo.png';
const headshot = '/headshot.png';

5. Start local development:

npm run dev

6. Deploy:

- Push project to GitHub
- Connect GitHub repo to Vercel
- Attach GoDaddy domain in Vercel settings

-----------------------------------
TAILWIND CONFIG
-----------------------------------

In src/index.css replace everything with:

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: Inter, sans-serif;
  background: #FAF8F3;
}

-----------------------------------
MAIN.JSX
-----------------------------------

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

*/

const logo = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop';
const headshot = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop';

export default function BrightPathWebsite() {
  const services = [
    {
      title: 'Speech Delay',
      description:
        'Support for toddlers and young children who are developing speech and communication skills more slowly than expected.',
    },
    {
      title: 'Articulation Therapy',
      description:
        'Helping children improve speech clarity and pronunciation so they can communicate more confidently.',
    },
    {
      title: 'Language Therapy',
      description:
        'Building expressive and receptive language skills for stronger communication and comprehension.',
    },
    {
      title: 'Executive Function',
      description:
        'Supporting organization, attention, planning, and self-management skills for school-age children and teens.',
    },
    {
      title: 'Social Communication Skills',
      description:
        'Helping children strengthen conversational skills, social understanding, and peer interactions.',
    },
  ];

  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer:
        'Bright Path is a private pay practice. Documentation is provided to help families seek out-of-network reimbursement.',
    },
    {
      question: 'How long are sessions?',
      answer:
        'Sessions are 60 minutes and include parent consultation and personalized recommendations.',
    },
    {
      question: 'What ages do you work with?',
      answer: 'Rachel works with children ages 2 through 18.',
    },
    {
      question: 'How do I know if my child needs speech therapy?',
      answer:
        'A consultation and screener can help determine whether a full evaluation is appropriate for your child’s needs.',
    },
    {
      question: 'Do you offer virtual sessions?',
      answer:
        'Yes. Telehealth sessions are available for school-age children and teens.',
    },
    {
      question: 'How often should therapy occur?',
      answer:
        'Weekly therapy is recommended for most children, though scheduling is personalized based on family goals and needs.',
    },
  ];

  const googleReviewsLink = 'https://share.google/4mUCHYFLDOuXvdmsw';

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#2F4A63] scroll-smooth font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #FAF8F3;
        }

        h1, h2, h3, h4 {
          font-family: 'Cormorant Garamond', serif;
        }

        .fade-in {
          animation: fadeInUp 0.8s ease forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#FAF8F3]/90 border-b border-[#e8e5df]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#2F4A63]">
              Bright Path
            </h1>
            <p className="text-xs md:text-sm text-[#6e7c86] tracking-wide">
              Speech & Language Therapy, LLC
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#435563]">
            <a href="#about" className="hover:text-[#D9A441] transition-colors">About</a>
            <a href="#services" className="hover:text-[#D9A441] transition-colors">Services</a>
            <a href="#faq" className="hover:text-[#D9A441] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#D9A441] transition-colors">Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-[#2F4A63] text-white px-5 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium"
          >
            Contact Us Today
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F3] via-[#f8f4ea] to-[#dfe7de]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-36 grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <span className="inline-flex items-center gap-2 bg-white/80 border border-[#e5dfd3] text-[#6c7c68] rounded-full px-4 py-2 text-sm shadow-sm mb-6">
              Serving Cinnaminson & South Jersey Families
            </span>

            <h2 className="text-5xl md:text-7xl leading-tight text-[#2F4A63] font-semibold max-w-2xl">
              Personalized speech and language therapy for brighter futures.
            </h2>

            <p className="mt-8 text-lg md:text-xl text-[#5d6974] leading-relaxed max-w-xl">
              Helping children ages 2–18 build confident communication skills through engaging,
              individualized therapy in a warm and supportive environment.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#2F4A63] hover:bg-[#253b50] text-white px-7 py-4 rounded-full shadow-lg transition-all duration-300 text-center font-medium"
              >
                Reach Out Today
              </a>

              <a
                href="#services"
                className="bg-white text-[#2F4A63] border border-[#d7d1c6] px-7 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-center font-medium"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative fade-in flex justify-center lg:justify-end">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-[#ebe8e1] p-8 md:p-10 max-w-lg w-full">
              <img
                src={logo}
                alt="Bright Path branding image"
                className="w-full h-auto object-contain"
              />

              <div className="mt-8 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-[#A7B39A] font-semibold">
                  In-Home Speech Office & Sensory Playroom
                </p>
                <h3 className="text-2xl md:text-3xl text-[#2F4A63] mt-3 font-semibold leading-snug">
                  Warm, personalized therapy designed to help children feel confident and supported.
                </h3>
              </div>
            </div>          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#A7B39A]/20 rounded-full blur-3xl" />
            <img
              src={headshot}
              alt="Rachel Lawler, MS, CCC-SLP"
              className="relative rounded-[2rem] shadow-xl object-cover w-full max-w-[420px] mx-auto h-auto"
            />
          </div>

          <div>
            <span className="text-[#D9A441] uppercase tracking-[0.2em] text-sm font-semibold">
              Meet Rachel
            </span>

            <h2 className="mt-4 text-5xl text-[#2F4A63] leading-tight">
              Compassionate therapy rooted in connection, confidence, and care.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[#5b6873]">
              Rachel Lawler, MS, CCC-SLP, brings over 16 years of experience helping children and families build stronger communication skills in supportive, engaging ways.
            </p>

            <div className="mt-8 space-y-5 text-[#5b6873] leading-relaxed">
              <p>
                As both a parent and speech-language pathologist, Rachel created Bright Path to provide families with a welcoming, encouraging therapy experience where children feel comfortable, motivated, and empowered.
              </p>

              <p>
                Every therapy session is highly individualized and thoughtfully designed around each child’s goals, strengths, and interests — making learning both effective and enjoyable.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <div className="bg-[#FAF8F3] rounded-3xl p-6 border border-[#ece7de] shadow-sm">
                <h4 className="text-xl font-semibold text-[#2F4A63]">Education</h4>
                <p className="mt-3 text-sm leading-relaxed text-[#66727c]">
                  B.A. in Communication Sciences and Disorders, minor in Special Education — West Chester University
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#66727c]">
                  M.S. in Speech-Language Pathology — Marywood University
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#66727c]">
                  ASHA Certificate of Clinical Competence
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#66727c]">
                  New Jersey State License in Speech-Language Pathology
                </p>
              </div>

              <div className="bg-[#FAF8F3] rounded-3xl p-6 border border-[#ece7de] shadow-sm">
                <h4 className="text-xl font-semibold text-[#2F4A63]">Approach</h4>
                <ul className="mt-3 space-y-2 text-sm text-[#66727c]">
                  <li>• Child-led & play-based</li>
                  <li>• Family-centered care</li>
                  <li>• Calm & encouraging sessions</li>
                  <li>• Personalized support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-[#F4F5F6]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#D9A441] uppercase tracking-[0.2em] text-sm font-semibold">
              Services
            </span>

            <h2 className="mt-4 text-5xl text-[#2F4A63]">
              Support tailored to your child’s unique needs.
            </h2>

            <p className="mt-6 text-lg text-[#61707c] leading-relaxed">
              Therapy sessions take place in Rachel’s welcoming in-home speech office and sensory playroom, thoughtfully designed to help children feel comfortable, engaged, and confident while learning.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-[2rem] p-6 md:p-8 border border-[#ebe8e1] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl md:text-3xl text-[#2F4A63] font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-[#61707c] leading-relaxed text-base md:text-lg max-w-3xl">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2F4A63] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-[#D9A441] uppercase tracking-[0.2em] text-sm font-semibold">
            Reviews
          </span>

          <h2 className="mt-4 text-5xl leading-tight">
            Hear from Bright Path families.
          </h2>

          <p className="mt-6 text-lg text-[#e5e7eb] leading-relaxed max-w-2xl mx-auto">
            Families appreciate the supportive, personalized approach Rachel brings to every therapy session.
          </p>

          <div className="mt-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 shadow-xl max-w-3xl mx-auto">
            <div className="bg-white rounded-[1.5rem] p-8 text-left shadow-lg border border-white/20">
              <div className="flex items-center gap-1 text-[#D9A441] text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-[#55626c] leading-relaxed text-lg italic">
                “Rachel has been absolutely wonderful to work with. She is patient, engaging, and truly cares about helping children build confidence and communication skills.”
              </p>

              <div className="mt-6 pt-4 border-t border-[#ece7de]">
                <p className="text-sm uppercase tracking-[0.15em] text-[#A7B39A] font-semibold">
                  Google Review
                </p>
              </div>
            </div>

            <p className="mt-8 text-[#f3f4f6] text-base leading-relaxed max-w-2xl mx-auto">
              Read more reviews and recommendations from local families on Google.
            </p>

            <a
              href={googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 bg-white text-[#2F4A63] px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              View Google Reviews
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-[#FAF8F3]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <span className="text-[#D9A441] uppercase tracking-[0.2em] text-sm font-semibold">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-5xl text-[#2F4A63]">
              Answers for parents and families.
            </h2>
          </div>

          <div className="mt-16 space-y-5">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-3xl border border-[#ece7de] shadow-sm overflow-hidden"
              >
                <summary className="list-none cursor-pointer px-8 py-6 flex items-center justify-between text-[#2F4A63] font-semibold text-lg">
                  {faq.question}
                  <span className="text-[#D9A441] text-2xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="px-8 pb-6 text-[#61707c] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#D9A441] uppercase tracking-[0.2em] text-sm font-semibold">
              Contact Bright Path
            </span>

            <h2 className="mt-4 text-5xl text-[#2F4A63] leading-tight">
              Reach out today and take the next step toward confident communication.
            </h2>

            <p className="mt-6 text-lg text-[#61707c] leading-relaxed max-w-xl">
              Bright Path proudly serves families in Cinnaminson, Cherry Hill, Moorestown, Delran, Riverside, Riverton, Palmyra, Maple Shade, Pennsauken, Merchantville, and nearby South Jersey communities.
            </p>

            <div className="mt-10 space-y-5 text-[#55626c]">
              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-[#D9A441] font-semibold">
                  Email
                </p>
                <a
                  href="mailto:brightpathspeechnj@gmail.com"
                  className="text-lg hover:text-[#D9A441] transition-colors"
                >
                  brightpathspeechnj@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-[#D9A441] font-semibold">
                  Availability
                </p>
                <p className="text-lg">
                  After-school and weekend appointments available.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-[#D9A441] font-semibold">
                  Preferred Contact Method
                </p>
                <p className="text-lg">Call or text for the fastest response.</p>
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] overflow-hidden shadow-xl border border-[#ece7de]">
              <iframe
                title="Bright Path Service Area"
                src="https://www.google.com/maps?q=Cinnaminson%2C%20NJ&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-[#FAF8F3] rounded-[2.5rem] border border-[#ece7de] shadow-xl p-8 md:p-10">
            <h3 className="text-4xl text-[#2F4A63] font-semibold">
              Schedule a Consultation
            </h3>

            <p className="mt-4 text-[#61707c] leading-relaxed">
              Complete the form below and Rachel will reach out to discuss your child’s needs and next steps.
            </p>

            <form
              className="mt-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for contacting Bright Path! A confirmation email has been sent.');
              }}
            >
              <div>
                <label className="block text-sm font-medium text-[#55626c] mb-2">
                  Parent Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-2xl border border-[#ddd7cd] bg-white px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#A7B39A]"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#55626c] mb-2">
                    Child Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-2xl border border-[#ddd7cd] bg-white px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#A7B39A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#55626c] mb-2">
                    Child Age
                  </label>
                  <input
                    type="number"
                    required
                    className="w-full rounded-2xl border border-[#ddd7cd] bg-white px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#A7B39A]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#55626c] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-2xl border border-[#ddd7cd] bg-white px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#A7B39A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#55626c] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-2xl border border-[#ddd7cd] bg-white px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#A7B39A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#55626c] mb-2">
                  Brief Description of Concerns
                </label>
                <textarea
                  rows="5"
                  required
                  className="w-full rounded-2xl border border-[#ddd7cd] bg-white px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#A7B39A]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2F4A63] hover:bg-[#253b50] text-white py-4 rounded-full shadow-lg transition-all duration-300 font-medium text-lg"
              >
                Reach Out Today
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#2F4A63] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-md">
            <h3 className="text-3xl font-semibold">
              Bright Path Speech & Language Therapy, LLC
            </h3>

            <p className="mt-4 text-[#dfe4e7] leading-relaxed">
              Empowering communication. Inspiring confidence. Building brighter futures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10 text-sm">
            <div>
              <h4 className="uppercase tracking-[0.15em] text-[#D9A441] font-semibold mb-4">
                Service Area
              </h4>

              <ul className="space-y-2 text-[#dfe4e7]">
                <li>Cinnaminson</li>
                <li>Cherry Hill</li>
                <li>Moorestown</li>
                <li>Merchantville</li>
              </ul>
            </div>

            <div>
              <h4 className="uppercase tracking-[0.15em] text-[#D9A441] font-semibold mb-4">
                Contact
              </h4>

              <ul className="space-y-2 text-[#dfe4e7]">
                <li>brightpathspeechnj@gmail.com</li>
                <li>After-school & weekend appointments</li>
                <li>Home-based & telehealth services</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10 pt-8 border-t border-white/10 text-sm text-[#cfd6db] flex flex-col md:flex-row justify-between gap-4">
          <p>
            © 2026 Bright Path Speech & Language Therapy, LLC. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://share.google/spF9GjJTQLqJlLqp8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D9A441] transition-colors"
            >
              Google Business Profile
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
