"use server";

import { NextResponse } from "next/server";
import { toast } from "sonner";
import { UTApi } from "uploadthing/server";

export const utApi = new UTApi();

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
