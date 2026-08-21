import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const company = String(body.company ?? "").trim();
    const country = String(body.country ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const businessType = String(body.businessType ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    const text = [
      "🔔 新客户咨询",
      "",
      `🏢 公司/姓名: ${company || "-"}`,
      `🌍 国家: ${country || "-"}`,
      `📞 电话: ${phone || "-"}`,
      `💼 业务类型: ${businessType || "-"}`,
      `📧 邮箱: ${email || "-"}`,
      "",
      "💬 咨询内容:",
      message || "-",
      "",
      `⏰ 时间: ${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Seoul" })}`,
    ].join("\n");

    const results = { telegram: "skipped", email: "skipped" };

    // 1) Telegram 即时通知（需配置 TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID）
    const tgToken = process.env.TELEGRAM_BOT_TOKEN;
    const tgChatId = process.env.TELEGRAM_CHAT_ID;
    if (tgToken && tgChatId) {
      const res = await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: tgChatId, text }),
      });
      results.telegram = res.ok ? "sent" : `error ${res.status}`;
    }

    // 2) 邮件留档（可选，配置 RESEND_API_KEY / RESEND_FROM / RESEND_TO 后启用）
    const resendKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = process.env.RESEND_TO;
    if (resendKey && from && to) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: to.split(",").map((addr) => addr.trim()),
          subject: `New inquiry from ${company || "website"}`,
          text,
        }),
      });
      results.email = res.ok ? "sent" : `error ${res.status}`;
    }

    return NextResponse.json({ success: true, results });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
