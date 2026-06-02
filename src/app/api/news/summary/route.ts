import { connectDB } from '@/lib/mongodb';
import { News } from '@/models/News';
import { Like } from '@/models/Like';
import { getAuthPayload } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const mine = searchParams.get('mine') === 'true';
    const filter: any = {};

    if (mine) {
      const payload = getAuthPayload(request);
      if (!payload?.id) {
        return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
      }
      filter.authorId = payload.id;
    }

    const totalNews = await News.countDocuments(filter);
    const viewsResult = await News.aggregate([
      { $match: filter },
      {
        $group: {
          _id: null,
          totalViews: { $sum: { $ifNull: ['$views', 0] } },
        },
      },
    ]);

    const totalViews = viewsResult?.[0]?.totalViews ?? 0;
    const newsIds = mine ? await News.find(filter).distinct('_id') : [];
    const totalLikes = mine
      ? await Like.countDocuments({ newsId: { $in: newsIds } })
      : await Like.countDocuments();

    return NextResponse.json(
      {
        success: true,
        data: {
          totalNews,
          totalViews,
          totalLikes,
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
