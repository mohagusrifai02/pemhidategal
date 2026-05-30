import { connectDB } from '@/lib/mongodb';
import { News } from '@/models/News';
import { getAuthPayload } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '10');

    let query: any = {};
    if (category && category !== 'semua') {
      query.category = category;
    }

    const news = await News.find(query)
      .sort({ publishedAt: -1 })
      .limit(limit);

    return NextResponse.json(
      {
        success: true,
        data: news,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Server error',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = getAuthPayload(request);
    if (!payload?.id) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const body = await request.json();

    // Generate slug from title
    const slug = body.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    const news = await News.create({
      ...body,
      slug,
    });

    return NextResponse.json(
      {
        success: true,
        data: news,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Server error',
      },
      { status: 400 }
    );
  }
}
