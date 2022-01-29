import Head from "next/head";
import { PostCard, Categories, PostWidget, Intro } from "../Components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";
import Footer from "../Components/Footer";

export default function Home({ posts }) {
  console.log(`this is the post data ${posts.JSON}`);

  return (
    <>
      <div className="container mx-auto  mb-8">
        <Head>
          <title>We Teach By Blogs</title>
          <meta
            name="description"
            content="Weteachbyblogs is one of the
            top Platform which helps Students, Jobseekers and Freshers. The main
            Goal of Platform is to Provide Hybrid solution for all things like
            Programming Languages, Programming Queries, Ethical Hacking,
            Technology, About Jobs, Scholarships, Internships, And Daily IT News
            Updates Etc... We strongly believe that insted of Speaking about
            something we show it in the Results."
          />
          <meta property="og:title" content="WeteachbyBlogs" />
          <meta name="theme-color" content="#395dff" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        {/* <Intro /> */}
        {/* <div className="bg-gradient-to-r from-purple-500 to-pink-300 pb-10 pt-20  text-center text-6xl relative bottom-8 h-screen  px-2 container">
          Home Page
        </div> */}
        <FeaturedPosts />

        <div className="grid grid-cols-1 px-10 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  };
}
