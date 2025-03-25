import React from "react";
import { notFound } from "next/navigation";
import blogs from "@/data/blogs2.json"; // Ensure this path is correct
import Navbar from "@/components/Common/Navbar";
import PageHeader from "@/components/Headers/PageHeader";
import BlogDetails from "@/components/Blogs/BlogDetails";
import Footer from "@/components/Common/Footer";

export const metadata = {
  title: "The Dark Light - Blog Details",
};

// ✅ Ensure correct static params for pre-rendering
export async function generateStaticParams() {
  if (!blogs || !Array.isArray(blogs)) {
    return []; // Avoid errors if blogs.json is missing
  }
  return blogs.map((blog) => ({
    id: blog.id.toString(), // Convert to string for consistency
  }));
}

export default function BlogDetailsPage({ params }) {
  if (!params || !params.id) {
    return notFound();
  }

  const blog = blogs.find((b) => b.id.toString() === params.id);

  if (!blog) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <PageHeader title={blog.title} paragraph="Latest blog details" />
      <BlogDetails blog={blog} img={blog.image} alt={blog.title} />
      <Footer />
    </>
  );
}
