"use server";

import { revalidateTag } from "next/cache";

export async function foodAction() {
  revalidateTag("foodCollection");
}
