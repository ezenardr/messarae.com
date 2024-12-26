import {NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req:NextRequest) {
  //mail credential
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const client = process.env.NEXT_PUBLIC_EMAIL_CLIENT;

  //request data
  const { name, phone, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'mail.infomaniak.com',
    port: 465,
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    await transporter.sendMail({
      from: username,
      to: client,
      subject: `${subject}`,
      html: `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nouvelle soumission du formulaire de contact</title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #333333;
    "
  >
    <div
      style="
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        border: 1px solid #e6e6e6;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      "
    >
      <div
        style="
          background-color: #bc6a9a;
          color: #ffffff;
          text-align: center;
          padding: 20px;
          font-size: 24px;
        "
      >
        Nouvelle soumission du formulaire de contact
      </div>
      <div style="padding: 20px; font-size: 16px; line-height: 1.6">
        <p>Bonjour,</p>
        <p>
          Vous avez reçu un nouveau message via le formulaire de contact sur
          <strong>messarae.com</strong>. Voici les détails :
        </p>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Subject :</strong> ${subject}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      </div>
      <div
        style="
          background-color: #f2f2f2;
          text-align: center;
          padding: 10px;
          font-size: 14px;
          color: #666666;
        "
      >
        <p>
          Il s'agit d'une notification automatisée provenant de
          <strong>messarae.com</strong>.
        </p>
        <p>
          Besoin d'aide ?
          <a
            href="mailto:ezenardr.dev@gmail.com"
            style="color: #bc6a9a; text-decoration: none"
            >Contactez le support</a
          >
        </p>
      </div>
    </div>
  </body>
</html>
`,
    });
    return NextResponse.json({ message: 'Réservation Réussie' });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: 'Failed' });
  }
}