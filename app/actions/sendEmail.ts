"use server";

import { TContactFormSchema } from "@/lib/common-types";
import { Resend } from "resend";

export const sendEmail = async (data: TContactFormSchema) => {
  const resend = new Resend(`${process.env.RESEND_API_KEY}`);

  console.log("data: ", data);
  // Validate Data server side
  // const validData = formSchema.safeParse(data);

  // if (!validData) {
  //   console.log("Data not valid");
  //   return { error: "Data Invalid" };
  // }

  const emailContent = `
  New Contact Form Application: \n
  Parent first name: ${data.firstname}
  Parent last name: ${data.lastname}
  Parent Email: ${data.email}\n
  Parent Phone Number: ${data.mobile}\n
  City & Country: ${data.city}, ${data.country}
  `;

  console.log("email: ", emailContent);

  const res = await resend.emails
    .send({
      from: "info@pes-edu.com",
      // to: "sohyb0155@gmail.com",
      to: "Mostafa.261.mk@gmail.com",
      subject: "Contact Form Application",
      text: emailContent,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((res: any) => {
      if (res.error) {
        console.log(res.error);
        return { error: res.error.message };
      } else {
        return { success: "Email sent successfully!" };
      }
    });
  return res;
};
