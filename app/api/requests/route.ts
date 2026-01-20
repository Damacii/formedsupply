import { NextResponse } from "next/server";
import { supabaseServer } from "../../../lib/supabaseServer";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const {
      name,
      email,
      company,
      phone,
      language,
      address,
      contactMethod,
      instagramHandle,
      productSelections,
      quantities,
      logoColor,
      logoUrl,
      message
    } = payload ?? {};

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const { error } = await supabaseServer.from("requests").insert({
      name,
      email,
      company: company || null,
      phone: phone || null,
      language: language || null,
      address: address || null,
      contact_method: contactMethod || null,
      instagram_handle: instagramHandle || null,
      products: Array.isArray(productSelections) ? productSelections : null,
      quantities: quantities || null,
      logo_color: logoColor || null,
      logo_url: logoUrl || null,
      message: message || null
    });

    if (error) {
      return NextResponse.json({ error: "Failed to save request." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
