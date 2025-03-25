import Breadcrumb from "@/components/Common/Breadcrumb";
import Post from "@/components/Post";
import {Metadata} from "next";
import {Posts} from '@/data/post'

export const metadata: Metadata = {
    title:
        "Artículos",
    description: "This is post page description",
};

const PostPage = () => {
    return (
        <>
            <Breadcrumb pageName="Artículos" pageDescription="Donde la ciencia y el conocimiento se encuentran"/>
            <div className=' bg-[#E9F9FF] dark:bg-dark-700'>
                <Post posts={Posts}/>
            </div>
        </>
    );
};

export default PostPage;
