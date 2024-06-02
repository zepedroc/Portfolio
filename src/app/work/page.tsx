'use client';

import { motion } from 'framer-motion';

import Experience from '@/components/experience';
import { experiences } from '@/src/constants/work';

export default function Home() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <div className="container mx-auto mt-28 p-4">
        {experiences.map((exp) => (
          <Experience key={exp.duration} {...exp} />
        ))}
      </div>
    </motion.div>
  );
}
