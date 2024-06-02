import Link from 'next/link';

import { HOMEPAGE_ICONS } from '../constants/homepage';
import { GithubIcon, LinkedinIcon, MailIcon } from '../icons/icons';

import IconCloud from '@/components/magicui/icon-cloud';

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center px-6 pt-24">
        <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl font-bold md:text-6xl">{"Hi, I'm José Mota"}</h1>
            <p className="mt-4 text-lg md:text-xl">
              {"I'm a passionate web developer with a strong background in front-end and back-end technologies."}
            </p>
          </div>
          <div className="flex justify-center">
            <IconCloud iconSlugs={HOMEPAGE_ICONS} />
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center gap-4 bg-black/50 px-6 py-4 backdrop-blur-md">
        <Link className="hover:text-gray-400" href="https://github.com/zepedroc" target="_blank">
          <GithubIcon className="h-6 w-6" />
        </Link>
        <Link className="hover:text-gray-400" href="https://www.linkedin.com/in/josé-pedro-mota-7395a6191/" target="_blank">
          <LinkedinIcon className="h-6 w-6" />
        </Link>
        <Link className="hover:text-gray-400" href="mailto:zepedrocm@hotmail.com">
          <MailIcon className="h-6 w-6" />
        </Link>
      </footer>
    </>
  );
}
