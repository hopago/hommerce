"use server";

import { NextResponse } from "next/server";

import { toast } from "sonner";

import { UTApi } from "uploadthing/server";

// files: JSON.stringify(FormDataEntryValue[]);

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

export async function deleteImages(urls: string[]) {
  const utApi = new UTApi();

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
