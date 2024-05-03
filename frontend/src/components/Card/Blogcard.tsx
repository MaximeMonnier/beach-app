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
        onUpdate: function (_updatedArticle: Omit<BlogcardProps, "id" | "createdAt">): void {
            throw new Error("Function not implemented.");
        }
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
            <button>
              <i
                className="fa-solid fa-pen text-color-3"
                onClick={handleChange}
              ></i>
            </button>
            <button onClick={() => onDelete(id)}>
              <i className="fa-solid fa-xmark text-color-6 ml-2"></i>
            </button>
          </div>
        </div>
        <div className="w-full border-2 border-color-6 mb-4 rounded-xl dark:border-color-5"></div>
        <div className="w-full">
          {transform ? (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Ajouter votre titre"
                name="title"
                id="title"
                value={editedTitle}
                onChange={handleTitleChange }
                className="input input-bordered w-full h-10  bg-bg-1 border border-color-3"
              />
            </div>
          ) : (
            <h1 className="mb-2 font-bold">{title}</h1>
          )}
          {transform ? (
            <div className="mb-4 flex flex-col">
              <textarea
                className="textarea textarea-bordered bg-bg-1 border border-color-3"
                placeholder="Bio"
                name="content"
                id="content"
                value={editedContent}
                onChange={handleContentChange}
              ></textarea>
              <button
                className="btn btn-neutral w-20 flex m-auto mt-2 bg-bg-2 text-color-1 hover:bg-bg-6"
                onClick={handleUpdate}
              >
                Valider
              </button>
            </div>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogcard;
