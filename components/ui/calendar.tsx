'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      // FIXED: Only use class names that are definitely valid
      classNames={{
        // Only include properties that are guaranteed to exist
        ...(classNames || {}),
        // Add our custom styles using the 'className' approach instead
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };