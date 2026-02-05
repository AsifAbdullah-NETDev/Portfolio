export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Abdullah Al Asif
      </div>
    </footer>
  );
}