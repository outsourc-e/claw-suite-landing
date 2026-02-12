import { NextRequest, NextResponse } from "next/server";

const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY || "";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const res = await fetch("https://api.buttondown.com/v1/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${BUTTONDOWN_API_KEY}`,
      },
      body: JSON.stringify({
        email_address: email,
        type: "regular",
        tags: ["landing"],
      }),
    });

    const data = await res.json().catch(() => null);

    if (res.ok || res.status === 201) {
      return NextResponse.json({ ok: true });
    }

    if (res.status === 409) {
      return NextResponse.json({ ok: true, already: true });
    }

    return NextResponse.json(
      { error: data?.detail || "Subscription failed" },
      { status: res.status }
    );
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
