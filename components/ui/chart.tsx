"use client"

import * as React from "react"
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js"
import resolveConfig from "tailwindcss/resolveConfig"
import cn from "classnames"

import tailwindConfig from "@/tailwind.config"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend)

const fullConfig = resolveConfig(tailwindConfig)

const getConfigValue = (path: string) => {
  const parts = path.split(".")
  let current: any = fullConfig.theme
  for (const part of parts) {
    if (current[part] === undefined) {
      return undefined
    }
    current = current[part]
  }
  return current
}

const getCssVarValue = (cssVar: string) => {
  if (typeof window === "undefined") return `hsl(var(${cssVar}))`
  const hsl = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim()
  return `hsl(${hsl})`
}

const ChartContext = React.createContext<any>(null)

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: {
  id?: string
  className?: string
  children: React.ReactNode
  config: Record<string, any>
} & React.HTMLAttributes<HTMLDivElement>) {
  const chartId = React.useId() || id
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn("flex h-96 w-full items-center justify-center text-center", className)}
        {...props}
      >
        {children}
      </div>
    </ChartContext.Provider>
  )
}

function ChartTooltip({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute hidden items-center justify-center rounded-md bg-white px-2 py-1 text-xs text-gray-950 shadow-md data-[state=active]:flex dark:bg-gray-950 dark:text-gray-50",
        className,
      )}
      {...props}
    />
  )
}

function ChartTooltipContent({
  className,
  hideLabel = false,
  hideValue = false,
  hideIndicator = false,
  labelFormatter,
  valueFormatter,
  indicatorFormatter,
  ...props
}: {
  className?: string
  hideLabel?: boolean
  hideValue?: boolean
  hideIndicator?: boolean
  labelFormatter?: (value: string) => string
  valueFormatter?: (value: number) => string
  indicatorFormatter?: (color: string) => React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
  const { active, payload, label } = Tooltip.useTooltipContext()
  const { config } = React.useContext(ChartContext)

  if (!active || !payload || payload.length === 0) return null

  const defaultIndicatorFormatter = (color: string) => (
    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
  )

  return (
    <div
      className={cn(
        "rounded-md border border-gray-200 bg-white px-2 py-1 text-xs shadow-md dark:border-gray-800 dark:bg-gray-950",
        className,
      )}
      {...props}
    >
      {!hideLabel && label && <div className="mb-1 font-medium">{labelFormatter ? labelFormatter(label) : label}</div>}
      <div className="grid gap-1">
        {payload.map((item: any) => {
          const { dataKey, value, stroke, fill, name } = item
          const color = config[dataKey]?.color || stroke || fill
          return (
            <div key={dataKey} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                {!hideIndicator && (indicatorFormatter ? indicatorFormatter(color) : defaultIndicatorFormatter(color))}
                {config[dataKey]?.label || name}
              </div>
              {!hideValue && <div className="font-medium">{valueFormatter ? valueFormatter(value) : value}</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { ChartContainer, ChartTooltip, ChartTooltipContent }
