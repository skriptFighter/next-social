import Image from "next/image";

const Comments = () => {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/28624741/pexels-photo-28624741/free-photo-of-close-up-of-dew-on-green-leaves-in-dense-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />

        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment ..."
            className="bg-transparent outline-none flex-1"
          />

          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <div className="">
            <Image
              src="https://images.pexels.com/photos/28624741/pexels-photo-28624741/free-photo-of-close-up-of-dew-on-green-leaves-in-dense-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className="w-8 h-8 rounded-full"
            />
          </div>

          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">John Doe</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, dolore, officiis rem accusamus nobis repellendus,
              tempora eligendi tempore ipsa architecto illum provident fuga quia
              iste impedit iure. In, optio harum.
            </p>

            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>

              <div className="">Reply</div>
            </div>
          </div>

          {/* ICON */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
