import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  Trophy,
  ArrowDown,
} from "lucide-react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// External Image URLs
const ASSETS = {
  heroBanner: "https://i.postimg.cc/sxnLgQT4/hero-banner.jpg",
  stadium1: "https://i.postimg.cc/L4vwTwmy/stadium1.jpg",
  stadium2: "https://i.postimg.cc/c1T2m2dk/stadium2.jpg",
  stadium3: "https://i.postimg.cc/WpSCnCsH/stadium3.jpg",
  stadium4: "https://i.postimg.cc/HsxKPzLB/stadium4.jpg",
  stadium5: "https://i.postimg.cc/pXT71Cdk/stadium5.jpg",
  stadium6: "https://i.postimg.cc/J4ngdxh6/stadium6.jpg",
};

const filters = [
  "All Events",
  "Cricket",
  "Football",
  "UFC & Boxing",
  "Formula 1",
  "Tennis",
  "WWE",
];

const events = [
  {
    category: "Cricket",
    title: "IPL 2026 Final",
    date: "24 May 2026",
    time: "7:30 PM IST",
    image: ASSETS.stadium1,
    description:
      "The season finale. There’s no better place to watch it than somewhere with a crowd this into it.",
  },
  {
    category: "Football",
    title: "UEFA Champions League Final",
    date: "30 May 2026",
    time: "12:30 AM IST",
    image: ASSETS.stadium2,
    description:
      "Late-night kickoff, good drinks, and no one asking you to keep the noise down.",
  },
  {
    category: "UFC & Boxing",
    title: "UFC 320: Championship Night",
    date: "7 June 2026",
    time: "8:30 PM IST",
    image: ASSETS.stadium3,
    description:
      "Every round live on the big screen. Bring people who’ll actually react.",
  },
  {
    category: "Formula 1",
    title: "Monaco Grand Prix",
    date: "25 May 2026",
    time: "6:30 PM IST",
    image: ASSETS.stadium4,
    description:
      "The most glamorous race on the calendar. ASG is the right room for it.",
  },
  {
    category: "Tennis",
    title: "Wimbledon Men’s Final",
    date: "12 July 2026",
    time: "6:30 PM IST",
    image: ASSETS.stadium5,
    description:
      "Big-screen tennis hits differently than your couch. Come find out.",
  },
  {
    category: "WWE",
    title: "WWE SummerSlam",
    date: "2 August 2026",
    time: "5:30 AM IST",
    image: ASSETS.stadium6,
    description:
      "It’s early. We’ll be open. Every entrance, every title match, live.",
  },
];

const regularScreenings = [
  {
    title: "Cricket",
    description:
      "IPL, ICC World Cup, T20 Internationals, ODIs and Test Matches.",
  },
  {
    title: "Football",
    description:
      "Premier League, La Liga, UEFA Champions League and ISL.",
  },
  {
    title: "UFC, WWE & Boxing",
    description:
      "Title fights, pay-per-view events and premium wrestling nights.",
  },
  {
    title: "Formula 1",
    description:
      "Every Grand Prix weekend, including qualifying and sprint races.",
  },
  {
    title: "Tennis",
    description:
      "Australian Open, Roland Garros, Wimbledon and US Open.",
  },
];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("All Events");

  const filteredEvents =
    activeFilter === "All Events"
      ? events
      : events.filter((event) => event.category === activeFilter);

  return (
    <div className="bg-[#0A0A0A] text-white overflow-hidden">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src={ASSETS.heroBanner}
          alt="Events Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-[#0A0A0A]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#DC2626] uppercase tracking-[0.4em] text-sm font-bold"
          >
            LIVE EXPERIENCES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-5xl md:text-8xl font-black leading-none"
          >
            UPCOMING
            <br />
            <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
              EVENTS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Cricket nights, UFC title fights, Formula 1 weekends.
            ASG brings every major sporting event to life on giant
            screens with premium hospitality and unmatched crowd energy.
          </motion.p>

          <motion.button
  onClick={() => {
    document
      .getElementById("events")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.45 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-[#DC2626] rounded-full font-semibold hover:bg-[#ef4444] transition-all duration-300 shadow-lg shadow-red-600/20"
>
  Explore Events
  <ArrowDown size={18} />
</motion.button>
        </div>
      </section>

      {/* Event Calendar Section */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#DC2626] uppercase tracking-[0.35em] text-sm font-bold">
              EVENT CALENDAR
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              DON’T MISS THE ACTION
            </h2>

            <p className="mt-6 text-lg text-white/70">
              Reserve your table before the biggest nights fill up.
            </p>
          </div>

          {/* Filters */}
<section
  id="events"
  className="mt-14"
>
  <div className="flex flex-wrap justify-center gap-3">
    {filters.map((filter) => (
      <button
        key={filter}
        onClick={() => setActiveFilter(filter)}
        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
          activeFilter === filter
            ? "bg-[#DC2626] text-white shadow-lg shadow-red-600/30"
            : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
        }`}
      >
        {filter}
      </button>
    ))}
  </div>
</section>

          {/* Events Grid */}
          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={`${event.title}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group rounded-[32px] overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-1.5 bg-[#DC2626]/90 rounded-full text-xs font-bold uppercase tracking-wider">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-black leading-tight">
                    {event.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#DC2626]" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-[#DC2626]" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <p className="mt-5 text-white/70 leading-relaxed">
                    {event.description}
                  </p>

                  <a
  href="https://wa.me/919664537932?text=Hi%20All%20Sett%20Go!%20I%E2%80%99d%20like%20to%20book%20a%20table.%20Please%20share%20availability%2C%20packages%2C%20and%20pricing."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center gap-2 text-[#DC2626] font-semibold hover:text-white transition"
>
  Book a Table
  <ChevronRight size={18} />
</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screened Regularly */}
      <section className="py-28 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#DC2626] uppercase tracking-[0.35em] text-sm font-bold">
              SCREENED REGULARLY
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              WE SHOW EVERY
              <span className="block text-white/70">
                MAJOR SPORTING EVENT
              </span>
            </h2>

            <p className="mt-6 text-lg text-white/70">
              All season, every season - if it matters, it’s on our screens.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularScreenings.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white/[0.03] border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Trophy size={18} className="text-[#DC2626]" />
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>

                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events CTA */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto rounded-[40px] p-12 md:p-20 text-center bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10">
          <span className="text-[#DC2626] uppercase tracking-[0.35em] text-sm font-bold">
            PRIVATE EVENTS
          </span>

          <h2 className="mt-6 text-4xl md:text-7xl font-black leading-tight">
            HOST YOUR OWN
            <span className="block text-white/70">BIG NIGHT</span>
          </h2>

          <p className="mt-6 text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Birthday celebrations, corporate nights, or private
            watch parties. <br /> We have the space, the screens, and the
            team to make it unforgettable.
          </p>

          <a
            href="https://wa.me/919876543210?text=Hi%20All%20Sett%20Go!%20I%E2%80%99d%20like%20to%20reserve%20my%20spot%20for%20the%20upcoming%20match.%20Please%20share%20the%20available%20packages%2C%20pricing%2C%20and%20timings."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-[#DC2626] rounded-full font-semibold hover:bg-[#ef4444] transition-all duration-300"
          >
            Book Private Event
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
      {/* Divider Before Footer */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Events;
