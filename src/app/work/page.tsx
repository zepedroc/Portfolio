'use client';

import { motion } from 'framer-motion';

import ExperienceCard from '@/components/experience-card';
import { experiences } from '@/src/constants/work';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <div className="container mx-auto mt-28 max-w-[80vw] p-4 lg:max-w-[50vw]">
        {experiences.map((exp, index) => (
          <div key={exp.duration}>
            <ExperienceCard {...exp} />
            {index < experiences.length - 1 && <Separator className="bg-slate-300" />}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
