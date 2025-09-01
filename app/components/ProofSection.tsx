"use client";
import { aiProofs } from "../config/content";
import { motion } from "framer-motion";

export default function ProofSection() {
  return (
    <section className="glassmorphism mt-10 rounded-xl shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
        <span className="inline-block"><i className="fas fa-robot text-yellow-400" /></span>
        AI-Generated Proofs & Disclosures
      </h2>
      <div className="flex flex-col gap-5">
        {aiProofs.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white bg-opacity-10 border border-yellow-300 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs bg-yellow-300 text-yellow-900 font-bold px-3 py-1 rounded-full">AI Generated</span>
              <span className="text-xs text-yellow-200 font-mono">{p.date}</span>
            </div>
            <div className="text-yellow-100 mb-2">
              <strong>Name Used:</strong> {p.name}<br />
              <strong>Context:</strong> {p.context}
            </div>
            <div className="text-yellow-50 italic">{p.proof}</div>
            <div className="text-xs text-yellow-200 font-mono mt-2 text-right">Generated with {p.tool}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
