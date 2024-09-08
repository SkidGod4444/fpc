import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { baseCurrency, targetCurrency } = await request.json();

    if (!baseCurrency || !targetCurrency) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const apiKey = process.env.CURRENCY_API_KEY;
    const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=${targetCurrency}&base_currency=${baseCurrency}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error processing conversion request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
