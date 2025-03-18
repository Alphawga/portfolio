import { motion } from 'framer-motion'

interface TimelineEvent {
  date: string
  title: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 border-l-2 border-blue-600"
        >
          <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1.5" />
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{event.date}</div>
          <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
        </motion.div>
      ))}
    </div>
  )
} 