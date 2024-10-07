import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27195708/pexels-photo-27195708/free-photo-of-meal-with-vegetables-on-dark-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Profile picture"
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <span className="font-medium">John Doe</span>
        </div>

        <Image src="/more.png" alt="More" width={16} height={16} />
      </div>

      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/20123614/pexels-photo-20123614/free-photo-of-gourmet-breakfast-with-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Post"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          officiis odio voluptate sit placeat odit, molestias alias culpa ut
          optio
        </p>
      </div>

      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl">
            <Image
              src="/like.png"
              alt="Like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <p className="text-gray-300">|</p>
            <p className="text-gray-500">
              300 <span className="hidden md:inline">Likes</span>
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 rounded-xl">
            <Image
              src="/comment.png"
              alt="Comments"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <p className="text-gray-300">|</p>
            <p className="text-gray-500">
              300 <span className="hidden md:inline">Comments</span>
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl">
            <Image
              src="/share.png"
              alt="Like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <p className="text-gray-300">|</p>
            <p className="text-gray-500">
              300 <span className="hidden md:inline">Share</span>
            </p>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
