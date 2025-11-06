export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6 text-sm text-white/70">
        <div>
          <div className="font-semibold text-white">AI Solutions Architect</div>
          <p className="mt-2">Designing end-to-end AI systems for video, automation, and intelligent web.</p>
        </div>
        <div>
          <div className="text-white">Navigation</div>
          <div className="mt-2 flex flex-col gap-1">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#blog" className="hover:text-white">Blog</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
        <div>
          <div className="text-white">Availability</div>
          <p className="mt-2">Accepting select projects. Remote-first, global.</p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
