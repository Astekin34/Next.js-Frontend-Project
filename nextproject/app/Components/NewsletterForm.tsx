"use client";

import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Subscribed successfully!");
      setEmail("");
    } else {
      setMessage("Failed to subscribe");
    }
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
      <h3 className="font-bold text-lg">Weekly Newsletter</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Get blog articles and offers via email
      </p>
      <form onSubmit={handleSubmit} className="mt-2">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          required
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white p-2 rounded w-full"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="text-sm text-green-500 mt-2">{message}</p>}
    </div>
  );
};

export default NewsletterForm;
