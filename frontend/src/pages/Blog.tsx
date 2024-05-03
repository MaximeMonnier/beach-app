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
  const [newArticle, setNewArticle] = useState<
    Omit<Article, "id" | "createdAt">
  >({
    title: "",
    author: "",
    content: "",
  });

  const openModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal.close();
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Article[]>(
        "http://localhost:3000/article"
      );
      setArticles(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch articles", error);
      setError("Failed to fetch articles");
      setLoading(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewArticle((prev) => ({ ...prev, [name]: value }));
  };

  const addArticle = async () => {
    setLoading(true);
    try {
      const response = await axios.post<Article>(
        `http://localhost:3000/article/create`,
        newArticle
      );
      setArticles((prev) => [response.data, ...prev]);
      setNewArticle({ title: "", author: "", content: "" });
      fetchArticle();
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un nouvel article", error);
      setError("Erreur lors de l'ajout d'un nouvel article");
    } finally {
      setLoading(false);
    }
  };

  const updateArticle = async (
    id: string,
    updatedArticle: Omit<Article, "id" | "createdAt">
  ) => {
    setLoading(true);
    try {
      const response = await axios.put<Article>(
        `http://localhost:3000/article/${id}`,
        updatedArticle
      );
      setArticles((prev) =>
        prev.map((article) => (article.id === id ? response.data : article))
      );
      setNewArticle({ title: "", author: "", content: "" });
      // fetchArticle(); 
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'article", error);
      setError("Erreur lors de la mise à jour de l'article");
    } finally {
      setLoading(false);
    }
  };

  const deleteArticle = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.delete<Article>(
        `http://localhost:3000/article/${id}`
      );
      setArticles((prev) => prev.filter((article) => article.id !== id));
      fetchArticle();
    } catch (error) {
      console.error("Erreur lors de suppresion de l'article", error);
      setError("Erreur lors de suppresion de l'articl");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-bg-5 dark:bg-bg-3">
      <div className="p-2">
        <NavBar />
      </div>
      <div className="w-full flex flex-col-reverse items-center">
        {articles.map((article) => (
          <Blogcard
            key={article.id}
            id={article.id}
            title={article.title}
            author={article.author}
            content={article.content}
            createdAt={article.createdAt}
            onDelete={() => deleteArticle(article.id)}
            onUpdate={(updatedArticle) => updateArticle(article.id, updatedArticle)}
          />
        ))}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn bg-bg-1 text-color-3 dark:bg-bg-2 dark:text-color-1 hover:bg-bg-6 hover:text-color-1 mb-2 w-1/2 border-none"
          onClick={openModal}
        >
          Ajouter un article
        </button>
        <dialog id="my_modal_1" className="modal text-color-1">
          <div className="modal-box w-full">
            <div className="w-full flex justify-between items-center">
              <h3 className="font-bold text-lg mb-4">Ajouter un article</h3>
              <button
                type="button"
                className="btn hover:bg-red-600 text-color-1"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <form onSubmit={addArticle}>
              <div className="mb-4">
                <label htmlFor="title" className="mb-1">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Ajouter votre titre"
                  name="title"
                  id="title"
                  value={newArticle.title}
                  onChange={handleChange}
                  className="input input-bordered w-full h-10"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="auteur" className="mb-1">
                  Auteur
                </label>
                <input
                  type="text"
                  placeholder="Ajouter votre nom"
                  name="author"
                  id="auteur"
                  value={newArticle.author}
                  onChange={handleChange}
                  className="input input-bordered w-full h-10"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="content" className="mb-1">
                  Content
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Bio"
                  name="content"
                  id="content"
                  value={newArticle.content}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-neutral hover:bg-bg-6 hover:text-color-1"
              >
                Ajouter
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Blog;
