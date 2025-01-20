import { getDb } from "@/lib/callDb";
import { Gallery } from '@/lib/types'

const COLLECTION_GALLERY = "Galleries"

export const getGallery = async () => {
    const db = await getDb()
    const result = (
        await db
        .collection(COLLECTION_GALLERY)
        .find()
        .project({_id: 0})
        .toArray()
    ) as Gallery[]

    return result
}