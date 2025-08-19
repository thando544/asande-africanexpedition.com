import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: String(process.env.SMTP_SECURE || 'true') === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendBookingEmails({
  activityName,
  date,
  people,
  name,
  email,
  phone,
  notes,
  reference,
}) {
  const from = process.env.FROM_EMAIL;
  const admin = process.env.ADMIN_EMAIL;

  const customerHtml = `
    <div style="font-family:Arial, sans-serif;">
      <h2>Booking Confirmed ✅</h2>
      <p>Hi ${name},</p>
      <p>Thank you for booking <strong>${activityName}</strong>.</p>
      <p><strong>Date:</strong> ${date}<br/>
         <strong>Guests:</strong> ${people}<br/>
         <strong>Reference:</strong> ${reference}</p>
      <p>We will contact you if anything else is needed. See you soon!</p>
      <p>— Awande Africa Expeditions</p>
    </div>
  `;

  const adminHtml = `
    <div style="font-family:Arial, sans-serif;">
      <h2>New Booking</h2>
      <p><strong>Ref:</strong> ${reference}</p>
      <ul>
        <li><strong>Activity:</strong> ${activityName}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>People:</strong> ${people}</li>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone || "—"}</li>
        <li><strong>Notes:</strong> ${notes || "—"}</li>
      </ul>
    </div>
  `;

  await transporter.sendMail({
    from,
    to: email,
    subject: `Booking Confirmed – ${activityName} (${reference})`,
    html: customerHtml,
  });

  await transporter.sendMail({
    from,
    to: admin,
    replyTo: email,
    subject: `New Booking – ${activityName} (${reference})`,
    html: adminHtml,
  });
}