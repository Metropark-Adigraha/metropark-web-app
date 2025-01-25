import { getDb } from "@/lib/callDb";

const COLLECTION_GALLERY = "Gallery"

export const getGallery = async (page: number, limit: number) => {
    const db = await getDb();
  
    const skip = (page - 1) * limit;
    const totalDocuments = await db
      .collection(COLLECTION_GALLERY)
      .countDocuments();
    const totalPages = Math.ceil(totalDocuments / limit);
  
    const galleries = await db
      .collection(COLLECTION_GALLERY)
      .find({})
      .skip(skip)
      .limit(limit)
      .toArray();

      console.log(galleries);
      
  
    return {
      galleries,
      totalPages,
      currentPage: page,
    };
  };