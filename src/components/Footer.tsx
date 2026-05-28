import { motion } from "framer-motion";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

// External Image URLs
const ASSETS = {
  logo: "https://i.postimg.cc/MHsLpM9y/asg-logo.webp",
};

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative bg-[#1A1A1A] pt-20 pb-8"
    >

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2626] to-transparent" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            {/* Logo */}
            <div className="mb-8">
              <img
                src={ASSETS.logo}
                alt="ASG Logo"
                className="h-28 w-auto object-contain"
              />
            </div>

            {/* Contact */}
            <div className="space-y-5 text-white/70">

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#DC2626] mt-1"
                />

                <span>
                  2nd Floor, Infinity Mall,
                  <br />
                  Andheri West, Mumbai 400053
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-[#DC2626]"
                />

                <span>+91 9819229052</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-[#DC2626]"
                />

                <span>info@allsettgo.com</span>
              </div>

              <div className="flex items-start gap-3">

                <Clock
                  size={18}
                  className="text-[#DC2626] mt-1"
                />

                <div>
                  <p className="text-white font-semibold">
                    Timings
                  </p>

                  <p className="text-sm">
                    Mon–Sun: 12 PM – 1 AM
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[350px] overflow-hidden rounded-3xl border border-white/10"
          >

            <iframe
              title="ASG Location"
              src="https://maps.google.com/maps?q=Infinity%20Mall%20Andheri%20West%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          </motion.div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-white/40 text-sm text-center md:text-left">
              © 2026 All Sett Go. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-white/40">

              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white">
                Terms
              </a>

              <a href="#" className="hover:text-white">
                Careers
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
