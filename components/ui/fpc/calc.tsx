"use client"

import { useState, useEffect } from "react"
import { CalendarIcon } from "lucide-react"
import { differenceInCalendarDays, format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRange } from "react-day-picker"
import { currencies, Currency } from "@/types"

export default function PriceCalculator() {
  const [totalAmount, setTotalAmount] = useState(5000)
  const [currency, setCurrency] = useState<Currency>(currencies[0])
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 30))
  })
  const [hoursPerDay, setHoursPerDay] = useState(8)
  const [daysPerWeek, setDaysPerWeek] = useState(5)
  const [convertAmount, setConvertAmount] = useState(totalAmount)
  const [convertFrom, setConvertFrom] = useState<Currency>(currencies[0])
  const [convertTo, setConvertTo] = useState<Currency>(currencies[1])
  const [activeTab, setActiveTab] = useState("calculator")
  const [conversionRate, setConversionRate] = useState<number | null>(null)

  useEffect(() => {
    setConvertAmount(totalAmount)
    setConvertFrom(currency)
  }, [totalAmount, currency])

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await fetch('/api/convert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            baseCurrency: convertFrom.code,
            targetCurrency: convertTo.code,
          }),
        });
        const data = await response.json();
        setConversionRate(data.data[convertTo.code].value);
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
        setConversionRate(null);
      }
    }
    if (activeTab === "converter" && convertFrom.code !== convertTo.code) {
      fetchConversionRate()
    }
  }, [activeTab, convertFrom, convertTo])

  const totalDays = dateRange && dateRange.from && dateRange.to
    ? differenceInCalendarDays(dateRange.to, dateRange.from) + 1
    : 0

  const totalWeeks = Math.ceil(totalDays / 7)
  const totalWorkDays = totalWeeks * daysPerWeek
  const totalHours = totalWorkDays * hoursPerDay

  const calculateHourlyRate = () => {
    return totalAmount / totalHours || 0
  }

  const formatCurrency = (amount: number, currencyObj: Currency) => {
    return `${currencyObj.symbol}${amount.toFixed(2)}`
  }

  const convertCurrency = (amount: number) => {
    if (conversionRate === null) return "N/A"
    return (amount * conversionRate).toFixed(2)
  }

  return (
    <Card className="w-full max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Freelance Price Calculator</CardTitle>
        <CardDescription>
          Calculate your project earnings and convert currencies
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Price Calculator</TabsTrigger>
            <TabsTrigger value="converter">Currency Converter</TabsTrigger>
          </TabsList>
          <TabsContent value="calculator" className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="totalAmount">Total Project Amount</Label>
                  <div className="flex">
                    <Input
                      id="totalAmount"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={totalAmount}
                      onChange={(e) => setTotalAmount(Number(e.target.value))}
                      className="rounded-r-none"
                    />
                    <Select
                      value={currency.code}
                      onValueChange={(value) => setCurrency(currencies.find((c) => c.code === value) || currencies[0])}
                    >
                      <SelectTrigger className="w-[120px] rounded-l-none">
                        <SelectValue placeholder="Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((c) => (
                          <SelectItem key={c.code} value={c.code}>
                            {c.code} - {c.symbol}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Project Duration</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !dateRange && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateRange?.from ? (
                          dateRange.to ? (
                            <>
                              {format(dateRange.from, "LLL dd, y")} -{" "}
                              {format(dateRange.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(dateRange.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date range</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={dateRange?.from}
                        selected={dateRange}
                        onSelect={setDateRange}
                        numberOfMonths={2}
                        className="flex flex-col sm:flex-row"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hoursPerDay">Hours per Day</Label>
                    <Input
                      id="hoursPerDay"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(Number(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="daysPerWeek">Days per Week</Label>
                    <Input
                      id="daysPerWeek"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={daysPerWeek}
                      onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <div className="p-4 bg-muted rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span>Total Project Amount:</span>
                    <span className="font-bold">{formatCurrency(totalAmount, currency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Project Duration:</span>
                    <span>{totalDays} days ({totalWeeks} weeks)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Work Hours:</span>
                    <span>{totalHours} hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hourly Rate:</span>
                    <span>{formatCurrency(calculateHourlyRate(), currency)}</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-muted rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span>Per Hour:</span>
                    <span>{formatCurrency(calculateHourlyRate(), currency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per Day ({hoursPerDay} hours):</span>
                    <span>{formatCurrency(calculateHourlyRate() * hoursPerDay, currency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per Week ({daysPerWeek} days):</span>
                    <span>{formatCurrency(calculateHourlyRate() * hoursPerDay * daysPerWeek, currency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per Month (4 weeks):</span>
                    <span>{formatCurrency(calculateHourlyRate() * hoursPerDay * daysPerWeek * 4, currency)}</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="converter" className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="convertAmount">Amount to Convert</Label>
                  <Input
                    id="convertAmount"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={convertAmount}
                    onChange={(e) => setConvertAmount(Number(e.target.value))}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="convertFrom">From</Label>
                    <Select
                      value={convertFrom.code}
                      onValueChange={(value) => setConvertFrom(currencies.find((c) => c.code === value) || currencies[0])}
                    >
                      <SelectTrigger id="convertFrom">
                        <SelectValue placeholder="From" />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((c) => (
                          <SelectItem key={c.code} value={c.code}>
                            {c.code} - {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="convertTo">To</Label>
                    <Select
                      value={convertTo.code}
                      onValueChange={(value) => setConvertTo(currencies.find((c) => c.code === value) || currencies[1])}
                    >
                      <SelectTrigger id="convertTo">
                        <SelectValue placeholder="To" />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((c) => (
                          <SelectItem key={c.code} value={c.code}>
                            {c.code} - {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <div className="p-4 bg-muted rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span>Converted Amount:</span>
                    <span className="font-bold">
                      {convertTo.symbol}{convertCurrency(convertAmount)} {convertTo.code}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hourly Rate:</span>
                    <span>
                      {convertTo.symbol}{convertCurrency(calculateHourlyRate())} {convertTo.code}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Rate ({hoursPerDay} hours):</span>
                    <span>
                      {convertTo.symbol}{convertCurrency(calculateHourlyRate() * hoursPerDay)} {convertTo.code}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly Rate ({daysPerWeek} days):</span>
                    <span>
                      {convertTo.symbol}{convertCurrency(calculateHourlyRate() * hoursPerDay * daysPerWeek)} {convertTo.code}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Rate (4 weeks):</span>
                    <span>
                      {convertTo.symbol}{convertCurrency(calculateHourlyRate() * hoursPerDay * daysPerWeek * 4)} {convertTo.code}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center items-center p-4 text-sm text-gray-600">
        <span>Built with</span>
        <svg className="w-5 h-5 mx-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
        <span>by</span>
        <a href="https://devwtf.in/" className="ml-1 font-medium text-blue-600 hover:underline">
          Saidev Dhal
        </a>
      </CardFooter>
    </Card>
  )
}