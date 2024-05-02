type Props = {};

function Blogcard({}: Props) {
    
  return (
    <div className="w-1/2 bg-bg-1 rounded-xl text-color-3 p-4 dark:bg-bg-2 dark:text-color-1">
      <div className="w-full flex mb-4">
        <div className="avatar mr-2">
          <div className="w-14 mask mask-squircle">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold">Maxime</h1>
          <p>dateTime</p>
        </div>
      </div>
      <div className="w-full border-2 border-color-6 mb-4 rounded-xl dark:border-color-5"></div>
      <div className="w-full">
        <h1 className="mb-2 font-bold">title</h1>
        <p>Content</p>
      </div>
    </div>
  );
}

export default Blogcard;
