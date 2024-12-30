import { getDb } from "@/lib/callDb";
import { Products, ProductTypeInput } from "@/lib/types";

const COLLECTION_PRODUCT = "Products";

export const getProduct = async () => {
    const db = await getDb();
    const product = (
        await db
        .collection(COLLECTION_PRODUCT)
        .find()
        .project({ _id: 0})
        .toArray()
    ) as Products[]

    return product
}

export const createProduct = async (product: ProductTypeInput) => {
    const db = await getDb();
    
    const result = await db.collection(COLLECTION_PRODUCT).insertOne(product);
    const insertedProduct = await db.collection(COLLECTION_PRODUCT).
    findOne({ _id: result.insertedId }) as Products;

    if(insertedProduct){
        const slug = `${insertedProduct.type}-${insertedProduct.title}`;

        await db.collection(COLLECTION_PRODUCT).updateOne(
            {_id: result.insertedId},
            {$set: { slug }}
        )
    } else {
        return {
            message: "error finding the available data"
        }
    }

    return {
        message: "success created Product"
    }
}
