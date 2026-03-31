import { NextResponse } from "next/server";
import { saveContactEntry } from "@/lib/contact-store";

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          ok: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    const result = await saveContactEntry({
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Contact submission received.",
        storage: result.ok ? "saved" : "accepted_without_persistence",
        count: result.count,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid request payload.",
      },
      { status: 400 }
    );
  }
}
