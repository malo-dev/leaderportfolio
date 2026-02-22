"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Votre message a été envoyé avec succès!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative w-full min-h-screen py-20 px-4 md:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Contactez-moi
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
           {"Êtes-vous prêt à transformer votre entreprise avec l'IA, le Web, le Mobile et la Cybersécurité ? Discutons de vos besoins et trouvons ensemble la solution parfaite."}

          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Informations de Contact</h3>
              
              <div className="space-y-6">
                {/* Informations personnelles temporairement masquées */}
                {/* <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-medium">leadermushio377@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Téléphone</p>
                    <p className="text-white font-medium">+256795873560</p>
                  </div>
                </div> */}

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Localisation</p>
                    <p className="text-white font-medium">Kigali</p>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <FaLinkedin className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">LinkedIn</p>
                    <p className="text-white font-medium">MUSHIO ATAULWA LEADER</p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">{`Domaines d'expertise`}</h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  'Intelligence Artificielle', 'Développement Web', 'Applications Mobile', 'Cybersécurité',
                  'Cloud & DevOps', 'Intégrations API', 'Bases de Données', 'Automatisation'
                ].map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg p-2 text-center">
                    <span className="text-white text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h3>
              
              {submitStatus && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 text-center">{submitStatus}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                    placeholder="Décrivez votre projet en IA, Web, Mobile ou Cybersécurité..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </div>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;