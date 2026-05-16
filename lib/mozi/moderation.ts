// Patterns that indicate jailbreak attempts or off-topic abuse
const JAILBREAK_PATTERNS = [
  /ignore (previous|above|all) instructions/i,
  /pretend (you are|to be)/i,
  /act as (a|an|if)/i,
  /you are now/i,
  /jailbreak/i,
  /dan mode/i,
  /developer mode/i,
  /override your/i,
  /forget your (instructions|purpose|rules)/i,
  /system prompt/i,
  /repeat (your|the) (instructions|prompt|system)/i,
];

// Topics clearly unrelated to a portfolio assistant
const OFF_TOPIC_PATTERNS = [
  /write (me )?(a |some )?(code|function|script|program|class)/i,
  /debug (my|this)/i,
  /explain (how|what|why) .{0,30} (works|is|are)/i,
  /what is (react|next|node|javascript|python|sql|docker)/i,
  /how (do|does|to) (you |I )?(use|install|configure|set up)/i,
  /generate (a |an |some )?(image|story|essay|email|letter)/i,
  /translate (this|to)/i,
  /write a (poem|story|essay|cover letter)/i,
];

export type ModerationResult =
  | { pass: true }
  | { pass: false; reason: "jailbreak" | "off_topic" };

export function moderateInput(content: string): ModerationResult {
  for (const pattern of JAILBREAK_PATTERNS) {
    if (pattern.test(content)) {
      return { pass: false, reason: "jailbreak" };
    }
  }
  for (const pattern of OFF_TOPIC_PATTERNS) {
    if (pattern.test(content)) {
      return { pass: false, reason: "off_topic" };
    }
  }
  return { pass: true };
}

export const JAILBREAK_RESPONSE =
  "Nice try 😄 I'm Mozi — I only answer questions about Mostafa's work and experience. What would you like to know about him?";

export const OFF_TOPIC_RESPONSE =
  "I'm only here to talk about Mostafa — his projects, stack, experience, and availability. Ask me anything about him!";
