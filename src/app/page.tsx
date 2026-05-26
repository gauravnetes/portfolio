import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import { Experience } from '@/components/Experience/Experience';
import { TechStack } from '@/components/TechStack/TechStack';
import { Projects } from '@/components/Projects/Projects';
import { GithubGraph } from '@/components/GithubGraph/GithubGraph';
import { Blog } from '@/components/Blog/Blog';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <GithubGraph />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
