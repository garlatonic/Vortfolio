import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="pt-32 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <h1 className="text-4xl font-bold text-center">Project Not Found</h1>
        <p className="text-center mt-4 text-neutral-600">
          The project you are looking for does not exist.
        </p>
        <div className="flex justify-center mt-8">
          <Link
            href="/"
            className="px-6 py-3 border border-neutral-900 text-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="pt-32 pb-20 px-6 md:px-12 inner">
      {/* Section 1: Project Hero */}
      <section
        id="project-hero"
        className="mb-24 border-b border-neutral-200 pb-12"
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-8">
          <div>
            <h1
              className="text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-neutral-900 leading-none reveal-text"
              style={{ animationDelay: "0.1s" }}
            >
              {project?.name}
            </h1>
            <p
              className="text-xl md:text-2xl text-neutral-500 mt-4 font-light reveal-text"
              style={{ animationDelay: "0.2s" }}
            >
              {project?.overview}
            </p>
          </div>
          <div
            className="font-display text-4xl md:text-6xl font-light text-neutral-300 reveal-text"
            style={{ animationDelay: "0.3s" }}
          >
            {project?.startDate} - {project?.endDate}
          </div>
        </div>

        <div
          className="flex gap-4 reveal-text"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="#"
            className="px-6 py-3 border border-neutral-900 text-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            VISIT LIVE SITE{" "}
            <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
          </Link>
          <Link
            href="#"
            className="px-6 py-3 border border-neutral-200 text-neutral-600 text-sm font-medium hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300"
          >
            GITHUB REPO <i className="fa-brands fa-github ml-2"></i>
          </Link>
        </div>
      </section>

      {/* Section 2: Content Grid */}
      <section
        id="project-details"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32"
      >
        {/* Left Column: Images */}
        <div className="lg:col-span-7 space-y-8">
          <div className="w-full h-125 relative border">
            <Image
              src={project?.thumbnail}
              // className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={`${project?.name} Main Interface`}
              fill
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="h-64 bg-neutral-100 overflow-hidden border border-neutral-200 shadow-sm relative group">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Code Structure"
              />
            </div>
            <div className="h-64 bg-neutral-100 overflow-hidden border border-neutral-200 shadow-sm relative group">
              <img
                src="https://images.unsplash.com/photo-1614728853913-1e22ba0e9851?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Particle Detail"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="lg:col-span-5 flex flex-col gap-16">
          {/* Description */}
          <div id="description">
            <h3 className="font-display text-sm font-bold tracking-widest uppercase mb-6 text-neutral-400">
              Description
            </h3>
            <div className="text-neutral-600 leading-relaxed space-y-6 text-lg font-light">
              {project?.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <Separator />

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Tech Stack */}
            <div id="tech-stack">
              <h3 className="font-display text-sm font-bold tracking-widest uppercase mb-6 text-neutral-400">
                Tech Stack
              </h3>
              <ul className="space-y-3 text-neutral-800 font-medium">
                {project?.skills.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div>{" "}
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            {/* Highlights */}
            <div id="highlights">
              <h3 className="font-display text-sm font-bold tracking-widest uppercase mb-6 text-neutral-400">
                Highlights
              </h3>
              <ul className="space-y-4 text-neutral-600 text-sm leading-relaxed">
                {project?.role.map((highlight, index) => (
                  <li
                    key={index}
                    className="pl-4 border-l-2 border-neutral-200"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Video / Motion Showcase */}
      <section id="motion-showcase" className="mb-32">
        <div className="relative w-full h-[600px] bg-neutral-900 overflow-hidden group cursor-pointer shadow-xl">
          {/* Placeholder for video background */}
          <img
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            alt="Video Placeholder"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
            <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 backdrop-blur-sm">
              <i className="fa-solid fa-play text-xl ml-1"></i>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">
              Experience the Motion
            </h2>
            <p className="text-white/70 font-light">
              Watch the galaxy come to life in this interaction demo.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Challenge & Solution */}
      <section
        id="process"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 border-t border-neutral-200 pt-24"
      >
        {/* Left: Headers sticky */}
        <div className="lg:col-span-4 space-y-24">
          <div className="sticky top-32">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-neutral-900 mb-4">
              The Challenge
            </h2>
            <div className="h-1 w-12 bg-neutral-900"></div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-8 space-y-32">
          {/* Challenge Content */}
          <div className="text-lg text-neutral-600 leading-relaxed font-light">
            <p>
              The main challenge was performance optimization. Rendering
              thousands of particles in real-time while maintaining a smooth
              60fps on mobile devices required custom shader implementations
              rather than relying on standard Three.js materials. We had to
              balance visual fidelity with raw performance, ensuring that the
              experience remained immersive without draining battery life or
              causing significant lag on mid-range devices.
            </p>
          </div>

          {/* Solution Section */}
          <div className="space-y-12">
            <div className="border-t border-neutral-200 pt-24">
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-neutral-900 mb-4">
                The Solution
              </h2>
              <div className="h-1 w-12 bg-neutral-900 mb-8"></div>

              <p className="text-lg text-neutral-600 leading-relaxed font-light mb-12">
                By utilizing GPU instancing and writing custom GLSL vertex
                shaders, we offloaded the heavy lifting from the CPU to the GPU.
                This allowed for complex curl noise simulations that dictate the
                movement of the stars, creating a fluid, organic feel that
                responds to cursor interaction without lag.
              </p>

              {/* Code Snippet Card */}
              <div className="bg-neutral-900 rounded-lg p-6 md:p-8 shadow-2xl font-mono text-sm overflow-hidden">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-neutral-500 text-xs uppercase">
                    vertexShader.glsl
                  </span>
                </div>
                <div className="text-neutral-300 code-scroll overflow-x-auto">
                  {/* <pre><code><span className="text-neutral-500">// GLSL Vertex Shader Snippet</span>
<span className="text-purple-400">void</span> <span className="text-blue-400">main</span>() {
  <span className="text-yellow-300">vec3</span> newPos = position;
  <span className="text-yellow-300">float</span> noise = <span className="text-blue-400">cnoise</span>(<span className="text-yellow-300">vec4</span>(position * <span className="text-orange-400">0.5</span> + time * <span className="text-orange-400">0.1</span>, time));
  
  newPos += normal * noise * <span className="text-orange-400">2.0</span>;
  
  <span className="text-neutral-500">// Apply projection matrix</span>
  gl_Position = projectionMatrix * modelViewMatrix * <span className="text-yellow-300">vec4</span>(newPos, <span className="text-orange-400">1.0</span>);
  
  <span className="text-neutral-500">// Pass varying to fragment shader</span>
  vUv = uv;
  vNoise = noise;
}</code></pre> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Next Project */}
      <section
        id="next-project"
        className="py-32 border-t border-neutral-200 flex flex-col items-center justify-center text-center"
      >
        <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-8">
          Next Case Study
        </span>

        <a href="#" className="group relative inline-block">
          <h2 className="font-display text-6xl md:text-9xl font-bold tracking-tighter text-neutral-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neutral-900 group-hover:to-neutral-500 transition-all duration-500">
            NEON{" "}
            <span className="text-neutral-200 group-hover:text-neutral-300 transition-colors">
              FLUX
            </span>
          </h2>
          <div className="h-1 w-0 bg-neutral-900 mx-auto mt-4 transition-all duration-500 group-hover:w-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="w-32 h-32 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-medium backdrop-blur-md bg-opacity-90 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
              VIEW CASE
            </div>
          </div>
        </a>
      </section>
    </main>
  );
}
