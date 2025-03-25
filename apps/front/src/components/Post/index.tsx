import type {Post} from '@/schemas/post'
import SingleBlog from "@/components/Blog/SingleBlog";

type Props = {
    posts: Post[]
}

export default function Post(props: Props) {

    return (
        <section id="contact" className="relative py-20 md:py-[120px]">


            <div className="container px-4">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="-mx-4 flex flex-wrap max-sm:p-5">
                        {
                            props.posts.map((post: Post, i: number) => (
                                <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <SingleBlog post={post}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className='grid grid-cols-4 gap-5'>
                        {
                            props.posts.map((post, index) => (
                                <div key={index}>
                                    {
                                        post.title
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};


