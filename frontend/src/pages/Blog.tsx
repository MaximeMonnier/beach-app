import Blogcard from "../components/Card/Blogcard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

type Props = {};

function Blog({}: Props) {
  return (
    <div className="bg-bg-5 dark:bg-bg-3">
      <div className="p-2">
        <NavBar />
      </div>
      <div className="w-full flex flex-col items-center">
        <Blogcard/>
      </div>
      <div className="p-2">
        <Footer/>
      </div>
    </div>
  );
}

export default Blog;
