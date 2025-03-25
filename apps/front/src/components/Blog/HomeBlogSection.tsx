import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { Post } from "@/types/post";

type Props = {
  posts: Post[]
}
const HomeBlogSection = (props: Props ) => {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Artículos"
            title="Ultimos Artículos"
            paragraph="Explora ideas, descubre tendencias y encuentra inspiración en nuestra selección de artículos."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          {
            props.posts.map((post: Post, i: number) => (
              <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <SingleBlog post={post} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
