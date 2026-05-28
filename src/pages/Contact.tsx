import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-[#0A0A0A] text-white overflow-hidden">

      {/* Header */}
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]" />

        <div className="relative z-10 text-center px-6">

          <span className="text-[#DC2626] uppercase tracking-[0.4em] text-sm font-bold">
            GET IN TOUCH
          </span>

          <h1 className="mt-6 text-6xl md:text-8xl font-black">
            CONTACT US
          </h1>

          <p className="mt-8 text-white/70 text-lg max-w-2xl mx-auto">
            Have questions, bookings, or collaborations?
            Reach out and our team will get back to you.
          </p>

        </div>

      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-5xl font-black">
              LET’S TALK
            </h2>

            <div className="mt-10 space-y-8 text-white/70">

              <div>
                <p className="text-[#DC2626] uppercase text-sm tracking-widest">
                  Address
                </p>

                <p className="mt-2 text-lg">
                  2nd Floor, Infinity Mall, Andheri West,
                  Mumbai, Maharashtra 400053
                </p>
              </div>

              <div>
                <p className="text-[#DC2626] uppercase text-sm tracking-widest">
                  Phone
                </p>

                <p className="mt-2 text-lg">
                  +91 9819229052
                </p>
              </div>

              <div>
                <p className="text-[#DC2626] uppercase text-sm tracking-widest">
                  Email
                </p>

                <p className="mt-2 text-lg">
                  info@allsettgo.com
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glassmorphism-dark rounded-[32px] p-10 border border-white/10"
          >

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none"
              />

              <button
                className="w-full bg-[#DC2626] hover:bg-[#B91C1C] transition py-4 rounded-2xl font-bold"
              >
                SEND MESSAGE
              </button>

            </form>

          </motion.div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Contact;