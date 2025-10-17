import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure your transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use STARTTLS
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USER,
    pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD,
  },
});

export async function POST(req) {
  try {
    const {
      to,
      gmail_name,
      gmail_date,
      gmail_time,
      gmail_location,
      gmail_organizerName,
      gmail_organizerEmail,
      gmail_guestsEmail,
      gmail_meetingButton,
      gmail_meetingLink,
      gmail_email,
    } = await req.json();

    if (!to) {
      return NextResponse.json(
        { error: "Recipient email (to) is required" },
        { status: 400 }
      );
    }

    // === Your provided HTML template ===
    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Ui</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <style>
      @media only screen and (max-width: 600px) {
        .main-row {
          display: flex !important;
          flex-direction: column !important;
        }
        .button-cell {
          order: -1 !important; /* :point_left: Button first on mobile */
          text-align: left !important;
          margin-bottom: 16px !important;
        }
        .details-cell {
          width: 100% !important;
        }
        .button-cell a {
          display: inline-block !important;
          width: auto !important;
        }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;font-family:'Roboto',Arial,sans-serif;">
    <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width:720px;margin:40px auto;background-color:#FFFFFF;border:1px solid #DADCE0;border-radius:8px;">
      <tr>
        <td style="padding:28px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr class="main-row" style="vertical-align:top;">
              <!-- Left Section (Details) -->
              <td class="details-cell" style="width:65%;padding-right:10px;">
                <h2 style="font-size:18px;font-weight:400;margin:0 0 20px 0;color:#202124;">${gmail_name}</h2>
                <p style="font-size:14px;color:#0D0D0D;font-weight:550;margin:0 0 6px 0;">When</p>
                <p style="font-size:14px;color:#5F6368;margin:0 0 16px 0;line-height:1.5;">${gmail_date} ${gmail_time} ${gmail_location}</p>
                <p style="font-size:14px;color:#0D0D0D;font-weight:550;margin:0 0 6px 0;">Organizer</p>
                <p style="font-size:14px;color:#5F6368;font-weight:500;margin:0 0 16px 0;line-height:1.5;">
                  ${gmail_organizerName}<br />
                  <a href="mailto:${gmail_organizerEmail}" style="color:grey;text-decoration:none;font-weight:400;">${gmail_organizerEmail}</a>
                </p>
                <p style="font-size:14px;color:#0D0D0D;font-weight:550;margin:0 0 6px 0;">Guests</p>
                <p style="font-size:14px;color:#5F6368;font-weight:500;margin:0 0 16px 0;line-height:1.5;">
                  ${gmail_guestsEmail}<br />
                  <a href="#" style="color:#1A73E8;text-decoration:none;font-weight:500;">View all guest info</a>
                </p>
              </td>
              <!-- Right Section (Button + Link) -->
              <td class="button-cell" style="width:35%;text-align:right;">
                <a href="${gmail_meetingLink}" target="_blank" style="background-color:#1A73E8;color:#FFFFFF;padding:12px 24px;text-decoration:none;border-radius:6px;font-size:15px;font-weight:500;display:inline-block;margin-bottom:20px;box-shadow:0 1px 2px rgba(60,64,67,0.3),0 1px 3px rgba(60,64,67,0.15);">${gmail_meetingButton}</a>
                <p style="font-size:14px;color:#0D0D0D;font-weight:550;margin:0 0 6px 0;">Meeting link</p>
                <a href="${gmail_meetingLink}" target="_blank" style="font-size:14px;color:grey;text-decoration:none;font-weight:500;">${gmail_meetingLink}</a>
              </td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #E0E0E0;margin:24px 0;" />
          <p style="font-size:14px;color:#5F6368;margin:0 0 14px 0;line-height:1.5;">
            <span style="color:#0D0D0D;font-weight:550;">Reply</span> for ${gmail_email}
          </p>
          <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td><a href="#" style="background-color:#FFFFFF;color:#1A73E8;border:1px solid #DADCE0;padding:6px 20px;text-decoration:none;border-radius:18px;font-size:14px;margin-right:8px;display:inline-block;">Yes</a></td>
              <td><a href="#" style="background-color:#FFFFFF;color:#1A73E8;border:1px solid #DADCE0;padding:6px 20px;text-decoration:none;border-radius:18px;font-size:14px;margin-right:8px;display:inline-block;">No</a></td>
              <td><a href="#" style="background-color:#FFFFFF;color:#1A73E8;border:1px solid #DADCE0;padding:6px 20px;text-decoration:none;border-radius:18px;font-size:14px;margin-right:8px;display:inline-block;">Maybe</a></td>
              <td><a href="#" style="background-color:#FFFFFF;color:#3C4043;border:1px solid #DADCE0;padding:6px 20px;text-decoration:none;border-radius:18px;font-size:14px;display:inline-block;">More options</a></td>
            </tr>
          </table>
          <p style="font-size:12px;color:#5F6368;margin:0 0 6px 0;line-height:1.5;">
            Invitation from
            <a href="https://calendar.google.com/" target="_blank" style="color:#1A73E8;text-decoration:none;font-weight:400;">Google Calendar</a>
          </p>
          <p style="font-size:12px;color:#5F6368;margin-top:4px;line-height:1.6;">
            You are receiving this email because you are subscribed to calendar notifications.
            To stop receiving these emails, go to
            <a href="https://calendar.google.com/calendar/u/0/r/settings" target="_blank" style="color:#1A73E8;text-decoration:none;">Calendar settings</a>,
            select this calendar, and change "Other notifications".
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    // --- Send email ---
    await transporter.sendMail({
      from: `"Accurack" <no-reply@accurack.ai>`,
      to,
      subject: `Invitation from an ${gmail_organizerName} - @ ${gmail_date} ${gmail_time} (${to})`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
