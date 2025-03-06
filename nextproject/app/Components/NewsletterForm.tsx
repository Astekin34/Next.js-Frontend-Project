"use client";

import { useState } from "react";
import Image from "next/image";

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
    <div className="p-4 w-[392px] h-[254px] bg-white dark:bg-[#242535] rounded-md shadow-md">
      <h3 className="font-semibold text-xl text-center mt-4">
        Weekly Newsletter
      </h3>
      <p className="text-base text-center text-gray-500 dark:text-gray-400">
        Get blog articles and offers via email
      </p>
      <br />
      <form onSubmit={handleSubmit} className="mt-2 mx-auto w-4/5">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded border dark:border-[#3B3C4A] bg-white dark:bg-gray-900 
             bg-no-repeat bg-right pr-10"
          style={{
            backgroundImage: "url('/mail.png')",
            backgroundSize: "20px",
            backgroundPosition: "right 10px center",
          }}
          required
        />
        <button
          type="submit"
          className="mt-2 bg-[#4B6BFB] text-white p-2 rounded w-full"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="text-sm text-green-500 mt-2">{message}</p>}
    </div>
  );
};

export default NewsletterForm;
