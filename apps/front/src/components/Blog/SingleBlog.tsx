import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import {Post} from '@/types/post'

type Props = {
  post: Post
}
const SingleBlog = ({post}: Props) => {

  return (
    <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
      <div className="mb-8 overflow-hidden rounded">
        <Link href={`/post/${post.id}`} aria-label="blog cover" className="block">
          <Image
            src={post.coverImage!}
            alt="image"
            className="w-full transition group-hover:rotate-6 group-hover:scale-125"
            width={408}
            height={272}
          />
        </Link>
      </div>
      <div>
        <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
          {format(new Date(post.date), "dd MMM yyyy")}
        </span>
        <h3>
          <Link
            href={`/post/${post.id}`}
            className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {post.title}
          </Link>
        </h3>
        <p className="text-base text-body-color dark:text-dark-6">{post.body}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
