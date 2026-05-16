import { prisma } from "@/lib/prisma";

export async function getOrCreateConversation(visitorId: string) {
  let conversation = await prisma.conversation.findFirst({
    where: { visitorId },
    orderBy: { updatedAt: "desc" },
    include: {
      messages: {
        orderBy: { createdAt: "asc" },
        take: 50,
      },
    },
  });

  if (!conversation) {
    conversation = await prisma.conversation.create({
      data: { visitorId },
      include: { messages: true },
    });
  }

  return conversation;
}

export async function saveMessage({
  conversationId,
  role,
  content,
  flagged = false,
}: {
  conversationId: string;
  role: "user" | "assistant";
  content: string;
  flagged?: boolean;
}) {
  return prisma.message.create({
    data: { conversationId, role, content, flagged },
  });
}

export async function updateConversationTimestamp(conversationId: string) {
  return prisma.conversation.update({
    where: { id: conversationId },
    data: { updatedAt: new Date() },
  });
}
