import { getGallery } from "@/db/models/gallery";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number.parseInt(searchParams.get("page") || "1", 10);
  const limit = Number.parseInt(searchParams.get("limit") || "10", 10);

  try {
    const { galleries, totalPages, currentPage } = await getGallery(
      page,
      limit
    );

    console.log(galleries);
    

    return NextResponse.json({
      galleries,
      totalPages,
      currentPage,
    });
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
