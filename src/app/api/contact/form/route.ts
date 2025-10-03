import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, message } = body

    // Create transporter (correct method name is createTransport)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content - from is the user's email
    const mailOptions = {
      from: email, // This is the user's email who filled the form
      replyTo: email, // Allow easy reply to the user
      to: process.env.CONTACT_EMAIL, // Your business email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #033231; border-bottom: 3px solid #cbff54; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin: 20px 0;">
            <p><strong style="color: #033231;">Name:</strong> ${firstName} ${lastName}</p>
            <p><strong style="color: #033231;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong style="color: #033231;">Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          <div style="background-color: #f6f7f7; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 0;"><strong style="color: #033231;">Message:</strong></p>
            <p style="margin: 10px 0 0 0; line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This email was sent from the DuoFast contact form.
          </p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}