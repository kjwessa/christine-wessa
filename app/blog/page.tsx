import Header from "../components/Header";
import BlogMain from "../components/BlogMain";
import Footer from "../components/Footer";
export default function Blog() {
  return (
    <div className="flex min-h-svh flex-col text-slate-800">
      <Header />
      <BlogMain />
      <Footer />
    </div>
  );
}
