import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.blogPost.createMany({
    data: [
      {
        title: "The Future of Technology",
        content: `
          The Future of Technology

          Technology is evolving rapidly, shaping the way we live, work, and interact with each other. The future holds exciting possibilities, from AI advancements to space exploration. What's next for technology?

          AI Advancements:
          - AI in healthcare
          - AI in business
          - AI in entertainment

          Conclusion:
          Technology is shaping the future of work, healthcare, and everyday life. The possibilities are endless, and we are only scratching the surface of what AI and other technologies can achieve.
        `,
        imageUrl: "/blog1.png",
      },
      {
        title: "How AI is Changing the World",
        content: `
          How AI is Changing the World

          Artificial Intelligence is impacting industries in many ways, from automating tasks to providing deep insights through machine learning. Its growth is exponential and unstoppable.

          Impact on Jobs:
          - Automated manufacturing
          - AI-driven customer service
          - AI in finance

          The Future of AI:
          As AI continues to evolve, it is expected to handle even more complex tasks, opening up new possibilities and industries.

          Conclusion:
          AI is transforming the world in ways we couldn't have imagined just a few years ago, and its impact will only grow as it continues to advance.
        `,
      },
      {
        title: "The Rise of Web 3.0",
        content: `
          The Rise of Web 3.0

          Web 3.0 represents the next evolution of the internet, focusing on decentralization, blockchain technology, and user sovereignty over data.

          What is Web 3.0?
          Web 3.0 aims to create a more open, user-controlled internet by using decentralized technologies like blockchain. This shift from Web 2.0's centralization promises to reshape industries.

          Blockchain technology:
          - Blockchain
          - Decentralized applications (dApps)
          - Cryptocurrencies

          Conclusion:
          Web 3.0 is an exciting development that will disrupt existing models of the internet, making it more open and user-centric.
        `,
      },
      {
        title: "Cybersecurity in the Modern Age",
        content: `
          Cybersecurity in the Modern Age

          With the rise of digital transformation, cybersecurity has become more important than ever. Protecting data and privacy is now a top priority for individuals and businesses alike.

          The Growing Threat:
          As the world becomes more connected, the potential for cyberattacks grows. Organizations must adopt robust cybersecurity strategies to protect their data and networks.

          Best Practices for Cybersecurity:
          - Use strong, unique passwords
          - Regularly update software and systems
          - Enable multi-factor authentication

          Conclusion:
          Cybersecurity is crucial in today's digital world, and staying ahead of evolving threats is essential for protecting our personal and professional lives.
        `,
      },
      {
        title: "The Evolution of Mobile Technology",
        content: `
          The Evolution of Mobile Technology

          From the first mobile phones to today's 5G-enabled smartphones, mobile technology has drastically transformed communication, entertainment, and business.

          The Early Days:
          Mobile phones began as simple communication tools, but as technology improved, they became more multifunctional. The first mobile phone call was made in 1973, and since then, the evolution has been rapid.

          The Modern Era:
          Today, mobile phones are integral to our daily lives, with apps for almost everything, from banking to entertainment.

          Conclusion:
          Mobile technology continues to evolve, with new features and capabilities emerging every year. It’s hard to imagine life without these devices that have become such an essential part of our daily routines.
        `,
      },
    ],
  });

  console.log("Blog posts added!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
