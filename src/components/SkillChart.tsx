'use client';
import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';

export default function SkillChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Destroy existing chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        const config: ChartConfiguration = {
          type: 'radar',
          data: {
            labels: ['Frontend', 'Backend', 'DevOps', 'Mobile', 'UI/UX', 'Database'],
            datasets: [{
              label: 'Skills',
              data: [90, 85, 75, 80, 85, 80],
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 2
            }]
          },
          options: {
            scales: {
              r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  stepSize: 20
                }
              }
            },
            plugins: {
              legend: {
                display: false
              }
            },
            responsive: true,
            maintainAspectRatio: true
          }
        };

        // Create new chart and store the instance
        chartInstance.current = new Chart(ctx, config);
      }
    }

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto">
      <canvas ref={chartRef} />
    </div>
  );
} 