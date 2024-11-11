'use client';
import { motion } from 'framer-motion';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-600" />
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}
        >
          <div className="w-1/2 p-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <span className="text-blue-600 font-semibold">{event.date}</span>
              <h3 className="text-xl font-bold mt-2">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{event.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 