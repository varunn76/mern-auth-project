import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);

export const resendClient = async function (recipent, subjectTitle, template) {
  console.log("recipent", recipent, subjectTitle);
  const { data, error } = await resend.emails.send({
    from: "Nexus <onboarding@resend.dev>",
    to: recipent,
    subject: subjectTitle,
    html: template,
  });

  if (error) {
    return console.error({ error });
  }
  console.log({ data });
  return data;
};
