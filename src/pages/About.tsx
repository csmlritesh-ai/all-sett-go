import { motion } from "framer-motion";
import {
  ArrowRight,
  Trophy,
  Users,
  MonitorPlay,
  Sparkles,
  ShieldCheck
} from "lucide-react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const About = () => {
  return (
    <div className="bg-[#0A0A0A] text-white overflow-hidden">

      {/* NAVIGATION */}
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <img
          src="/images/hero-banner-copy.jpg"
          alt="ASG Banner"
          className="absolute inset-0 w-full h-full object-cover scale-120"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0A0A0A]" />

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#DC2626]/20 blur-[180px] rounded-full" />

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 text-center px-6 max-w-6xl"
        >

          <motion.span
            variants={fadeUp}
            custom={1}
            className="inline-block text-[#DC2626] uppercase tracking-[0.45em] text-sm font-bold"
          >
            The ASG Experience
          </motion.span>
          
          <h3 className="mt-5 text-5xl md:text-7xl font-black text-white leading-tight max-w-5xl"> BUILT FOR <span className="text-gradient"> TRUE FANNS </span> </h3>
          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-10 text-lg md:text-2xl text-white/65 leading-relaxed max-w-3xl mx-auto"
          >
            Where stadium energy meets premium hospitality.
            Massive visuals, electrifying sound, immersive atmosphere,
            and unforgettable match nights - all under one roof.
          </motion.p>

          <motion.button
            variants={fadeUp}
            custom={4}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-12 px-9 py-5 rounded-full bg-[#DC2626] hover:bg-[#ef4444] transition-all duration-300 text-white font-bold text-sm tracking-wide inline-flex items-center gap-3 shadow-[0_0_50px_rgba(220,38,38,0.35)]"
          >
            EXPERIENCE ASG
            <ArrowRight size={18} />
          </motion.button>

        </motion.div>

      </section>

      {/* STORY SECTION */}
      <section className="relative py-32 px-6 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute left-0 top-40 w-[500px] h-[500px] bg-[#DC2626]/10 blur-[150px] rounded-full" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Glow Border */}
            <div className="absolute -inset-5 bg-gradient-to-r from-[#DC2626]/30 to-transparent blur-3xl rounded-[40px]" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10">

              <img
                src="/images/hero-banner-crowd.jpg"
                alt="ASG Crowd"
                className="w-full h-[720px] object-cover hover:scale-105 transition-transform duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            </div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <span className="text-[#DC2626] uppercase tracking-[0.45em] text-sm font-bold">
              Our Story
            </span>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              THIS IS HOW
              THE GAME
              BEGAN
            </h2>

            <div className="mt-10 space-y-7 text-white/70 text-lg leading-relaxed">

              <p>
                All Sett Go was born from a simple feeling every sports fan knows -
                the desire to experience the energy of a stadium without giving up comfort.
              </p>

              <p>
                Stadiums were thrilling but chaotic, while ordinary bars never captured
                the true spirit of the game.
              </p>

              <p>
                This is where ASG began.
              </p>

              <p>
                A space created for fans who want more than just a screen.
                With massive visuals, stadium-style seating, electrifying sound,
                immersive lighting, and an atmosphere that keeps every heartbeat alive,
                ASG brings fans closer to the game than ever before.
              </p>

              <p className="text-white font-semibold">
                Because at ASG, you don’t just watch the game -
                you live it.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* EXPERIENCE CARDS */}
      <section className="relative py-32 px-6 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_70%)]" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <span className="text-[#DC2626] uppercase tracking-[0.45em] text-sm font-bold">
              What Makes ASG Different
            </span>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-none tracking-tight">
              THE ASG
              <br />
              EXPERIENCE
            </h2>

          </motion.div>

          {/* Cards */}
          <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: Trophy,
                title: "MATCH-DAY ENERGY",
                desc: "Immersive visuals, electrifying sound, and unforgettable crowd atmosphere."
              },
              {
                icon: Sparkles,
                title: "PREMIUM HOSPITALITY",
                desc: "Elevated food, signature drinks, and an unforgettable premium experience."
              },
              {
                icon: MonitorPlay,
                title: "DESIGNED FOR FANNS",
                desc: "Every seat, screen, and detail is built around the fan experience."
              },
              {
                icon: Users,
                title: "COMMUNITY",
                desc: "A destination where fans celebrate victories and unforgettable moments together."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.02
                }}
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-b from-[#DC2626]/10 to-transparent" />

                <div className="relative z-10">

                  <div className="w-16 h-16 rounded-2xl bg-[#DC2626]/15 border border-[#DC2626]/20 flex items-center justify-center">
                    <item.icon
                      size={30}
                      className="text-[#DC2626]"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-black leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-white/60 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* VISION MISSION VALUES */}
      <section className="relative py-32 px-6 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.12),transparent_60%)]" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <span className="text-[#DC2626] uppercase tracking-[0.45em] text-sm font-bold">
              Vision • Mission • Values
            </span>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-none tracking-tight">
              WHAT DRIVES
              <br />
              ASG
            </h2>

          </motion.div>

          {/* Cards */}
          <div className="mt-24 grid lg:grid-cols-3 gap-8">

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10"
            >

              <div className="absolute -top-20 right-0 w-52 h-52 bg-[#DC2626]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

              <span className="absolute top-5 right-6 text-7xl font-black text-white/10">
                01
              </span>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-[#DC2626]/15 border border-[#DC2626]/20 flex items-center justify-center">
                  <Trophy className="text-[#DC2626]" size={28} />
                </div>

                <span className="mt-8 block text-[#DC2626] uppercase tracking-[0.35em] text-sm font-bold">
                  Vision
                </span>

                <p className="mt-6 text-2xl font-bold leading-relaxed text-white/90">
                  ASG isn’t just a sports bar-it’s a ritual, a home ground,
                  and the place people think of first when it’s time to watch a big match.
                </p>

              </div>

            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10"
            >

              <div className="absolute -bottom-20 left-0 w-52 h-52 bg-[#DC2626]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

              <span className="absolute top-5 right-6 text-7xl font-black text-white/10">
                02
              </span>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-[#DC2626]/15 border border-[#DC2626]/20 flex items-center justify-center">
                  <Sparkles className="text-[#DC2626]" size={28} />
                </div>

                <span className="mt-8 block text-[#DC2626] uppercase tracking-[0.35em] text-sm font-bold">
                  Mission
                </span>

                <p className="mt-6 text-2xl font-bold leading-relaxed text-white/90">
                  To create an energetic, stadium-like environment where fans can celebrate
                  their favorite sports while enjoying premium food, drinks, and service.
                </p>

              </div>

            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-[#DC2626]/20 to-white/[0.03] backdrop-blur-2xl p-10"
            >

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.25),transparent_60%)] opacity-70" />

              <span className="absolute top-5 right-6 text-7xl font-black text-white/10">
                03
              </span>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <ShieldCheck className="text-[#DC2626]" size={28} />
                </div>

                <span className="mt-8 block text-[#DC2626] uppercase tracking-[0.35em] text-sm font-bold">
                  Core Values
                </span>

                <p className="mt-6 text-2xl font-bold leading-relaxed text-white/90">
                  We believe in delivering high-energy experiences,
                  fostering a sense of community, and maintaining uncompromising
                  quality in everything we serve.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="relative pb-32 px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto rounded-[42px] overflow-hidden border border-white/10"
        >

          {/* Image */}
          <img
            src="/images/hero-banner.jpg"
            alt="ASG Match Night"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/75" />

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18),transparent_70%)]" />

          {/* Content */}
          <div className="relative z-10 py-28 px-8 md:px-20 text-center">

            <span className="text-[#DC2626] uppercase tracking-[0.45em] text-sm font-bold">
              Match Day Starts Here
            </span>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              READY FOR
              <br />
              THE NEXT MATCH?
            </h2>

            <p className="mt-8 text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Experience the energy, the crowd,
              and the unforgettable atmosphere that makes ASG different.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-12 px-10 py-5 rounded-full bg-[#DC2626] hover:bg-[#ef4444] transition-all duration-300 text-white font-bold text-lg inline-flex items-center gap-3 shadow-[0_0_50px_rgba(220,38,38,0.35)]"
            >
              BOOK YOUR EXPERIENCE
              <ArrowRight size={20} />
            </motion.button>

          </div>

        </motion.div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default About;