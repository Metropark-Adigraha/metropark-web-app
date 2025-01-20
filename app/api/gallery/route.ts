import { getGallery } from "@/db/models/gallery";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    // const result = await getGallery()

    const result = [{
        data: "tes",
        1: 1
    }]

    if(!result) {
        return NextResponse.json({
            data: "no data",
            message: "fail to fetch galleries",
            status: 400
        })
    }

    return NextResponse.json({
        data: result,
        message: "success fetch galleries",
        status: 200
    })
}