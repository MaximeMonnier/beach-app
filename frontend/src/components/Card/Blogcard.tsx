import React, { useState, useEffect } from "react";

interface BlogcardProps {
  id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
  onDelete: (id: string) => void;
  onUpdate: (updatedArticle: Omit<BlogcardProps, "id" | "createdAt">) => void;
}

const Blogcard: React.FC<BlogcardProps> = ({
  id,
  title,
  author,
  content,
  createdAt,
  onDelete,
  onUpdate,
}) => {

  
  const [transform, setTransform] = useState<boolean>(false);
  const [editedContent, setEditedContent] = useState<string>(content);
  const [editedTitle, setEditedTitle] = useState<string>(title);
  const date = new Date(createdAt);

  const formattedDate = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleChange = () => {
    setTransform(!transform);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedContent(e.target.value);
  };

  const handleUpdate = () => {
    onUpdate({
      title: editedTitle,
      author: author,
      content: editedContent,
      onDelete: function (_id: string): void {
        throw new Error("Function not implemented.");
      },
      onUpdate: function (
        _updatedArticle: Omit<BlogcardProps, "id" | "createdAt">
      ): void {
        throw new Error("Function not implemented.");
      },
    });
  };

  return (
    <>
      <div className="w-1/2 bg-bg-1 rounded-xl text-color-3 p-4 dark:bg-bg-2 dark:text-color-1 mb-4">
        <div className="w-full flex mb-4">
          <div className="avatar mr-2">
            <div className="w-14 mask mask-squircle">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Author"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center">
            <h1 className="font-bold">{author}</h1>
            <p>{formattedDate}</p>
          </div>
          <div className="w-full flex justify-end">
            <button
              className="btn btn-outline border-none hover:bg-orange-600 "
              onClick={handleChange}
            >
              <i className="fa-solid fa-pen text-black hover:text-color-1 dark:text-color-1"></i>
            </button>
            <button
              className="btn btn-outline border-none hover:bg-red-600 "
              onClick={() => onDelete(id)}
            >
              <i className="fa-solid fa-xmark text-black font-bold hover:text-color-1 dark:text-color-1"></i>
            </button>

            <button></button>
          </div>
        </div>
        <div className="w-full border-2 border-color-6 mb-4 rounded-xl dark:border-color-5"></div>
        <div className="w-full">
          {transform ? (
            <div className="mb-4 ">
              <input
                type="text"
                placeholder="Ajouter votre titre"
                name="title"
                id="title"
                value={editedTitle}
                onChange={handleTitleChange}
                className="input input-bordered w-full h-10  bg-bg-1 border border-color-3 dark:bg-bg-3"
              />
            </div>
          ) : (
            <h1 className="mb-2 font-bold">{title}</h1>
          )}
          {transform ? (
            <div className="mb-4 flex flex-col">
              <textarea
                className="textarea textarea-bordered bg-bg-1 border border-color-3 dark:bg-bg-3"
                placeholder="Bio"
                name="content"
                id="content"
                value={editedContent}
                onChange={handleContentChange}
              ></textarea>
              <button
                className="btn btn-neutral w-20 flex m-auto mt-2 bg-bg-2 text-color-1 hover:bg-bg-6 dark:bg-bg-3"
                onClick={handleUpdate}
              >
                Valider
              </button>
            </div>
          ) : (
            <p>{content}</p>
          )}
        </div>
        <div className="mt-2">
          <button className="btn btn-xs bg-bg-6 pt-0 text-color-1 border-none text-xs hover:bg-bg-3 dark:bg-bg-3 dark:hover:bg-bg-1 dark:hover:text-color-3">
            Jaime
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogcard;
