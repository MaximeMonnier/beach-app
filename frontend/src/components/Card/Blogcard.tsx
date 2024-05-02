import React from "react";

interface BlogcardProps {
    id: string;
    title: string;
    author: string;
    content: string;
    createdAt: string; 
}

const Blogcard: React.FC<BlogcardProps> = ({id, title, author, content, createdAt}) => {
    const date = new Date(createdAt);

    const formattedDate = date.toLocaleDateString("fr-FR", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="w-1/2 bg-bg-1 rounded-xl text-color-3 p-4 dark:bg-bg-2 dark:text-color-1 mb-4">
            <div className="w-full flex mb-4">
                <div className="avatar mr-2">
                    <div className="w-14 mask mask-squircle">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold">{author}</h1>
                    <p>{formattedDate}</p>
                </div>
            </div>
            <div className="w-full border-2 border-color-6 mb-4 rounded-xl dark:border-color-5"></div>
            <div className="w-full">
                <h1 className="mb-2 font-bold">{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Blogcard;
