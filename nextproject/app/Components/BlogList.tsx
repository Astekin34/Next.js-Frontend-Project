import { useEffect, useState } from "react";
import Image from "next/image";

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
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <div key={post.id} className="max-w-4xl mx-auto">
          {post.imageUrl && (
            <>
              <p className="text-sm text-gray-500 mb-5 mt-5">
                By Isa Dogruca - {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={800}
                height={400}
                className="rounded-md mb-4"
              />
            </>
          )}
          <h2 className="text-3xl font-semibold mb-4">{post.title}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {post.content}
          </p>
        </div>
      ))}

      {/* En Alttaki Reklam Kutusu */}
      <div className="max-w-4xl mx-auto p-4 bg-gray-100 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300 mt-10 rounded-md">
        <span className="block text-gray-500 text-lg">Advertisement</span>
        <span className="block text-gray-700 dark:text-gray-300 text-xl font-semibold">
          You can place ads.
        </span>
        <span className="block text-gray-500 text-lg">750x100</span>
      </div>
    </div>
  );
};

export default BlogList;
