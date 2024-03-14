"use server";

import { UTApi } from "uploadthing/server";

export const utApi = new UTApi();

export async function deleteImages(urls: string[]) {
  try {
    await utApi.deleteFiles(urls);
  } catch (err) {
    console.log(err);
  }
}
