

import Section from "@/components/Section";
import Link from "next/link";
import { Download, Briefcase } from "lucide-react";

export default function HomePage() {
  return (
    <Section>
      <div className="flex flex-col items-start gap-4">
        <span className="px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-600 rounded-full border border-blue-100">
          Available for new opportunities
        </span>
        <h1 className="text-6xl font-extrabold tracking-tight leading-tight">
          Abdullah Al Asif
        </h1>
        <p className="max-w-2xl text-xl text-slate-600 leading-relaxed">
          <span className="font-semibold text-slate-900">Software Engineer</span> specializing in 
          enterprise systems with <span className="text-blue-600">ASP.NET Core</span> and 
          crafting modern frontends with <span className="text-blue-600">Next.js</span>.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/resume.pdf"
            className="group px-8 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95 flex items-center gap-2"
          >
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </a>

          <Link 
            href="/projects"
            className="group px-8 py-3 border border-slate-200 font-medium rounded-xl hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-2"
          >
            <Briefcase size={18} className="text-slate-500 group-hover:text-slate-900 group-hover:-translate-y-0.5 transition-all"/>
            View Projects
          </Link>
        </div>
      </div>
    </Section>
  );
}