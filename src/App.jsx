import { motion } from "framer-motion";
import { FaCheckCircle, FaUsers, FaDollarSign } from "react-icons/fa";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-4">TaskFlow</h1>
        <p className="text-lg mb-6">
          Organize your tasks, boost productivity, and stay on track.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaCheckCircle size={40} />,
              title: "Easy to Use",
              desc: "Simple and clean task management.",
            },
            {
              icon: <FaUsers size={40} />,
              title: "Collaboration",
              desc: "Work together with your team.",
            },
            {
              icon: <FaDollarSign size={40} />,
              title: "Affordable",
              desc: "Plans that suit everyone.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 text-blue-600">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          {[
            "“TaskFlow keeps me organized every day!” – Ali",
            "“Our team productivity doubled with TaskFlow.” – Sara",
            "“Clean design and easy to use.” – Ahmed",
          ].map((review, i) => (
            <motion.p
              key={i}
              className="bg-white p-6 rounded-2xl shadow text-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {review}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Free",
              price: "$0",
              features: ["Basic tasks", "Single user"],
            },
            {
              title: "Pro",
              price: "$9",
              features: [
                "Unlimited tasks",
                "Collaboration",
                "Priority support",
              ],
            },
            {
              title: "Team",
              price: "$29",
              features: [
                "Team dashboards",
                "Advanced analytics",
                "Dedicated support",
              ],
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                {plan.title}
              </h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-2 text-gray-700">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-center gap-2"
                  >
                    <FaCheckCircle className="text-blue-600" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-2xl hover:scale-105 transition">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-blue-600 text-white text-center">
        <p>© 2025 TaskFlow | All rights reserved</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Twitter
          </a>
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
