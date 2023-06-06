import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  const bucketId = process.env.NEXT_PUBLIC_BUCKET_ID as string;
  if (!file) return;
  const fileUploaded = await storage.createFile(
    bucketId,
    ID.unique(),
    file
  );
  return fileUploaded;
};

export default uploadImage;
