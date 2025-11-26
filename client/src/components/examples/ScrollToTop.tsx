import ScrollToTop from "../ScrollToTop";

export default function ScrollToTopExample() {
  return (
    <div className="h-[200vh] relative">
      <p className="text-center py-20">Scroll down to see the button appear</p>
      <ScrollToTop />
    </div>
  );
}
