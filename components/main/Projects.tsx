'use client';

import React from "react";

const projects = [
  {
    title: "Next E-Pays – Food Delivery App",
    description:
      "A modern food delivery app like Uber Eats, enabling users to browse menus, place orders, and track deliveries in real-time.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 3h18l-1.5 9H6L4.5 3zm3 14a2 2 0 110 4 2 2 0 010-4zm10.5 0a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    ),
  },
  {
    title: "BIM Africa – Mobile Payment App",
    description:
      "A secure and user-friendly mobile application for managing payments and financial transactions across Africa.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 8c1.1 0 2 .9 2 2v1H8v-1c0-1.1.9-2 2-2h2zm-2 5h4v5h-4v-5z" />
        <path d="M4 6h16v2H4z" />
      </svg>
    ),
  },
  {
    title: "HospitalCare – Hospital Management System",
    description:
      "A complete hospital information system for managing patients, appointments, medical staff, and billing.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Compulse – Employee Management App",
    description:
      "An HR tool to handle employee data, payroll, attendance, and performance tracking with ease.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
        <path d="M2 20c0-2.5 5-4 10-4s10 1.5 10 4v2H2v-2z" />
      </svg>
    ),
  },
  {
    title: "StockTrack – Inventory Management",
    description:
      "A web-based solution to track inventory levels, orders, suppliers, and warehouse movements in real-time.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3z" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "CryptoDApp – Blockchain Web DApp",
    description:
      "A decentralized app to manage crypto assets, swap tokens, and interact with smart contracts on-chain.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Evently – Event Booking Platform",
    description:
      "A web platform for users to discover, book, and manage event tickets and passes in real-time.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 6h18v12H3z" />
        <path d="M16 10h.01M12 10h.01M8 10h.01M16 14h.01M12 14h.01M8 14h.01" />
      </svg>
    ),
  },
  {
    title: "EduCore – E-learning System",
    description:
      "A learning management system allowing teachers and students to connect, share materials, and track progress.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v14l-9-5-9 5V4z" />
      </svg>
    ),
  },
  {
    title: "SmartFarm – Agricultural Monitoring",
    description:
      "A smart farming platform for monitoring soil, crops, and livestock with real-time data and analytics.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2v20M5 12h14" />
        <path d="M5 5l7 7 7-7" />
      </svg>
    ),
  },
  {
    title: "SafeRide – Taxi & Moto App",
    description:
      "A ride-hailing application to connect passengers with safe and registered taxi or moto drivers in real-time.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4 17v-5a1 1 0 011-1h14a1 1 0 011 1v5" />
        <path d="M16 17a2 2 0 114 0 2 2 0 01-4 0zM4 17a2 2 0 114 0 2 2 0 01-4 0z" />
      </svg>
    ),
  },
  {
    title: "MediChat – Telemedicine App",
    description:
      "A mobile and web platform that allows patients to consult doctors remotely and access prescriptions digitally.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M8 10h8M8 14h5M4 6h16v12H5.17L4 19.17V6z" />
      </svg>
    ),
  },
  {
    title: "CleanNow – Laundry Booking App",
    description:
      "An online platform to schedule laundry pickups, deliveries, and payments with local providers.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
];

const Projects = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 bg-[#0F0F1A]">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#1A1A2E] p-6 hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center justify-center mb-4">{project.svg}</div>
          <h1 className="text-2xl font-semibold text-white">{project.title}</h1>
          <p className="mt-2 text-gray-300">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
