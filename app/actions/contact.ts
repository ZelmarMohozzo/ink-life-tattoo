"use server"

import { Resend } from "resend"
import { z } from "zod"
import nodemailer from "nodemailer"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitConsultation(formData: FormData) {
  try {
    // Extraer datos del formulario
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const course = formData.get("course") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const message = formData.get("message") as string

    // Validar campos requeridos
    if (!name || !email || !phone || !course || !date || !time) {
      return {
        success: false,
        message: "Por favor completa todos los campos requeridos.",
      }
    }

    // Configurar el transportador de email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Mapear nombres de cursos
    const courseNames = {
      inicial: "Curso Inicial (1 mes)",
      completo: "Curso Completo (2 meses)",
      full: "Curso Full (3 meses)",
    }

    // Configurar el email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "zelmarmohozzo@gmail.com",
      subject: `Nueva Consulta - INK LIFE TATTOO ACADEMY`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #7c3aed, #10b981); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">INK LIFE TATTOO ACADEMY</h1>
            <p style="color: white; margin: 5px 0;">Nueva Consulta de Curso</p>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #374151; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
              Información del Interesado
            </h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone}</p>
            </div>

            <h3 style="color: #374151; margin-top: 30px;">Detalles de la Consulta</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p><strong>Curso de Interés:</strong> ${courseNames[course as keyof typeof courseNames] || course}</p>
              <p><strong>Fecha Preferida:</strong> ${new Date(date).toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</p>
              <p><strong>Hora Preferida:</strong> ${time}</p>
            </div>

            ${
              message
                ? `
              <h3 style="color: #374151;">Mensaje Adicional</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <p style="line-height: 1.6;">${message}</p>
              </div>
            `
                : ""
            }

            <div style="background: #7c3aed; color: white; padding: 15px; border-radius: 8px; margin-top: 30px; text-align: center;">
              <p style="margin: 0;"><strong>¡Responde pronto para no perder esta oportunidad!</strong></p>
              <p style="margin: 5px 0; font-size: 14px;">Enviado desde inklifetattoo.com</p>
            </div>
          </div>
        </div>
      `,
    }

    // Enviar el email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "¡Consulta enviada exitosamente! Te contactaremos pronto.",
    }
  } catch (error) {
    console.error("Error enviando consulta:", error)
    return {
      success: false,
      message: "Error al enviar la consulta. Por favor intenta nuevamente.",
    }
  }
}

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO || "delivered@resend.dev", // Replace with your actual recipient email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })
    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send message." }
  }
}
