"use server";

import { NextResponse } from "next/server";

import { toast } from "sonner";

import { UTApi } from "uploadthing/server";

export const utApi = new UTApi();

export async function uploadFiles(files: FileList) {
  const filesArray = [];
  for (let i = 0; i < files.length; i++) {
    filesArray.push(files[i]);
  }

  try {
    const response = await utApi.uploadFiles(filesArray);

    const urls = response.map((res) => res.data?.url);

    return urls;
  } catch (err: unknown) {
    throw err;
  }
}

export async function deleteImages(urls: string[]) {
  if (Array.isArray(urls) && urls.length) {
    toast.warning("적합한 URL 타입이 아닙니다.");

    return NextResponse.json({ error: "Invalid urls type." }, { status: 400 });
  }

  try {
    await utApi.deleteFiles(urls);
  } catch (err) {
    console.log(err);
  }
}
