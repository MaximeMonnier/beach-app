import React, { useEffect, useState } from "react";
import Blogcard from "../components/Card/Blogcard";
import NavBar from "../components/NavBar";
import axios from "axios";

interface Article {
  id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
}

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Article[]>('http://localhost:3000/article');
      setArticles(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch articles', error);
      setError('Failed to fetch articles');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-bg-5 dark:bg-bg-3 h-screen">
      <div className="p-2">
        <NavBar />
      </div>
      <div className="w-full flex flex-col items-center">
        {articles.map((article) => (
          <Blogcard
            key={article.id}
            id={article.id}
            title={article.title}
            author={article.author}
            content={article.content}
            createdAt={article.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
