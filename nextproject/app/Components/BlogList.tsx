import { useEffect, useState } from "react";
import Image from "next/image";
import { Divide } from "lucide-react";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  imageUrl?: string;
  createdAt: string;
}

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        const sortedPosts = data.sort((a: Post, b: Post) =>
          parseInt(a.id) > parseInt(b.id) ? 1 : -1
        );
        setPosts(sortedPosts);
      });
  }, []);

  const filteredPosts1 = posts.filter(
    (post) => parseInt(post.id) >= 1 && parseInt(post.id) <= 3
  );
  const filteredPosts2 = posts.filter(
    (post) => parseInt(post.id) >= 4 && parseInt(post.id) <= 8
  );

  return (
    <div className="mx-auto max-w-4xl pt-8 pb-20 items-center justify-center space-y-5">
      <div>
        <div
          className="max-w-32 max-h-12 justify-start p-4 text-center text-sm font-medium text-white bg-[#4B6BFB] dark:text-white mb-4 rounded-md"
          style={{
            fontFamily: "var(--font-work-sans)",
          }}
        >
          Technology
        </div>
        <div>
          <h1
            className="text-4xl font-semibold text-181A2A dark:text-white"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
        </div>

        <div
          className="mt-5 flex flex-row"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          <Image
            src={"/pfp.png"}
            alt="Profile Picture"
            width={28}
            height={28}
          />
          <div className="text-sm text-[#696A75]">
            <span className="ml-3 font-medium">Tracey Wilson</span>{" "}
            <span className="ml-5">August 20, 2022</span>
          </div>
        </div>

        <div>
          <Image
            src="/blog-image.png"
            alt="Blog Image"
            width={900}
            height={462}
            className="mt-8 rounded-lg"
          />
        </div>

        {filteredPosts1.map((post) => (
          <div key={post.id}>
            <h2
              className="text-2xl mt-8 text-[#181A2A] font-semibold mb-4"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              {post.title}
            </h2>
            <p
              className="text-xl mt-4text-[#3B3C4A] dark:text-gray-300"
              style={{ fontFamily: "Source Serif Pro, serif" }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        ))}

        {/* En Alttaki Reklam Kutusu */}
        <div
          className="p-4 bg-gray-50 dark:bg-gray-800 text-center text-2xl italic text-gray-700 dark:text-gray-300 mt-10 rounded-md"
          style={{ fontFamily: "Source Serif Pro, serif" }}
        >
          <span>
            “ Traveling can expose you to new environments and potential health
            risks, so it's crucial to take precautions to stay safe and healthy.
            ”
          </span>
        </div>
        <div>
          <Image
            src="/blog1.png"
            alt="Blog Image"
            width={900}
            height={462}
            className="rounded-lg mt-4"
          />
        </div>

        <div
          className="p-4 bg-gray-100 dark:bg-gray-800 text-center text-[#696A75] dark:text-gray-300 mt-10 rounded-md"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          <span className="block text-sm">Advertisement</span>
          <span className="block dark:text-gray-300 text-xl font-semibold">
            You can place ads.
          </span>
          <span className="block text-sm">750x100</span>
        </div>

        {filteredPosts2.map((post) => (
          <div key={post.id}>
            <h2
              className="text-2xl mt-8 text-[#181A2A] font-semibold mb-4"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              {post.title}
            </h2>
            <p
              className="text-xl mt-4 text-[#3B3C4A] dark:text-gray-300"
              style={{ fontFamily: "Source Serif Pro, serif" }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
