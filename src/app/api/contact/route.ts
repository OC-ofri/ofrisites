import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, business, email, service, budget, message } = await req.json();

  if (!name || !email || !service || !budget) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'OKAI Contact Form <onboarding@resend.dev>',
    to: 'ofrikorenn@gmail.com',
    replyTo: email,
    subject: `New ${service} lead — ${name}${business ? ` (${business})` : ''}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;">
        <h2 style="margin:0 0 24px;color:#111;">New contact form submission</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#666;width:100px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
          ${business ? `<tr><td style="padding:8px 0;color:#666;">Business</td><td style="padding:8px 0;font-weight:600;">${business}</td></tr>` : ''}
          <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#1a6ff0;">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#666;">Service</td><td style="padding:8px 0;font-weight:600;">${service}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Budget</td><td style="padding:8px 0;font-weight:600;">${budget}</td></tr>
        </table>
        ${message ? `<div style="margin-top:24px;padding:20px;background:#f5f5f5;border-radius:8px;white-space:pre-wrap;line-height:1.6;">${message}</div>` : ''}
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
