import { NextRequest, NextResponse } from "next/server";
import { getOrCreateConversation } from "@/lib/mozi/visitor";

export async function GET(req: NextRequest) {
  try {
    const visitorId = req.nextUrl.searchParams.get("visitorId");

    if (!visitorId || typeof visitorId !== "string") {
      return NextResponse.json(
        { error: "Visitor ID required" },
        { status: 400 },
      );
    }

    const conversation = await getOrCreateConversation(visitorId);

    const messages = conversation.messages.map((msg) => ({
      id: msg.id,
      role: msg.role,
      content: msg.content,
      createdAt: msg.createdAt,
    }));

    return NextResponse.json({ messages, conversationId: conversation.id });
  } catch (error) {
    console.error("[Mozi History Error]", error);
    return NextResponse.json(
      { error: "Failed to load history" },
      { status: 500 },
    );
  }
}
