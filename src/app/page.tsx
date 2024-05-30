import Link from 'next/link';

import { HOMEPAGE_ICONS } from '../constants/homepage';
import { GithubIcon, LinkedinIcon, MailIcon } from '../icons/icons';

import IconCloud from '@/components/magicui/icon-cloud';

export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm José Mota</h1>
            <p className="text-lg md:text-xl mt-4">
              I'm a passionate web developer with a strong background in front-end and back-end technologies.
            </p>
          </div>
          <div className="flex justify-center">
            <IconCloud iconSlugs={HOMEPAGE_ICONS} />
          </div>
        </div>
      </main>
      <footer className="bg-black/50 backdrop-blur-md py-4 px-6 flex justify-center items-center gap-4">
        <Link className="hover:text-gray-400" href="https://github.com/zepedroc" target="_blank">
          <GithubIcon className="w-6 h-6" />
        </Link>
        <Link className="hover:text-gray-400" href="https://www.linkedin.com/in/josé-pedro-mota-7395a6191/" target="_blank">
          <LinkedinIcon className="w-6 h-6" />
        </Link>
        <Link className="hover:text-gray-400" href="mailto:zepedrocm@hotmail.com">
          <MailIcon className="w-6 h-6" />
        </Link>
      </footer>
    </>
  );
}
