import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log Web Vitals metrics
    console.log('Web Vitals:', {
      name: body.name,
      value: body.value,
      rating: body.rating,
      delta: body.delta,
      id: body.id,
    });

    // Here you can send metrics to your analytics service
    // For example: Google Analytics, Mixpanel, Vercel Analytics, etc.

    // For now, we just acknowledge receipt
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing web vitals:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
