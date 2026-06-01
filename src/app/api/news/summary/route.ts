import { connectDB } from '@/lib/mongodb';
import { News } from '@/models/News';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const totalNews = await News.countDocuments();
    const viewsResult = await News.aggregate([
      {
        $group: {
          _id: null,
          totalViews: { $sum: { $ifNull: ['$views', 0] } },
        },
      },
    ]);

    const totalViews = viewsResult?.[0]?.totalViews ?? 0;

    return NextResponse.json(
      {
        success: true,
        data: {
          totalNews,
          totalViews,
        },
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
