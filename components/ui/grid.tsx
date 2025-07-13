import React from 'react';
import { cn } from '@/lib/utils';

interface FadingGridProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string;
  className?: string;
}

export default function FadingGrid({
  width = 40,
  height = 40,
  x = 0,
  y = 0,
  strokeDasharray = '0',
  className,
  ...props
}: FadingGridProps) {
  const id = React.useId();
  const maskId = `${id}-mask`;
  const patternId = `${id}-pattern`;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full fill-none',
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <line
            x1="0"
            x2={width}
            y1="0.5"
            y2="0.5"
            className="stroke-gray-400"
            strokeWidth="1"
            strokeDasharray={strokeDasharray}
          />
          <line
            x1="0.5"
            x2="0.5"
            y1="0"
            y2={height}
            className="stroke-gray-400"
            strokeWidth="1"
            strokeDasharray={strokeDasharray}
          />
        </pattern>

        <mask id={maskId}>
          <radialGradient id={`${maskId}-gradient`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="40%" stopColor="white" stopOpacity="0.8" />
            <stop offset="70%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <rect width="100%" height="100%" fill={`url(#${maskId}-gradient)`} />
        </mask>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill={`url(#${patternId})`}
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}
