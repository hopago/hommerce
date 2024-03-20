"use server";

import { NextResponse } from "next/server";

import { toast } from "sonner";

import { UTApi } from "uploadthing/server";

export async function uploadFiles(formData: FormData) {
  const utApi = new UTApi();

  try {
    const files = formData.getAll("files");
    const response = await utApi.uploadFiles(files as File[]);
    const urls = response.map((res) => res.data?.url);

    return urls;
  } catch (err: unknown) {
    throw err;
  }
}

export async function deleteImages(urls: string | string[]) {
  const utApi = new UTApi();

  try {
    await utApi.deleteFiles(urls);
  } catch (err) {
    console.log(err);
  }
}
