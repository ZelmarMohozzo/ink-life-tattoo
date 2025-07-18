"use server"

import nodemailer from "nodemailer"

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

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
      return {
        success: false,
        message: "Por favor completa todos los campos.",
      }
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "zelmarmohozzo@gmail.com",
      subject: `Nuevo Mensaje de Contacto - INK LIFE TATTOO ACADEMY`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #7c3aed, #10b981); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">INK LIFE TATTOO ACADEMY</h1>
            <p style="color: white; margin: 5px 0;">Nuevo Mensaje de Contacto</p>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Mensaje:</strong></p>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 10px;">
                <p style="line-height: 1.6; margin: 0;">${message}</p>
              </div>
            </div>
            
            <div style="background: #7c3aed; color: white; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center;">
              <p style="margin: 0; font-size: 14px;">Enviado desde inklifetattoo.com</p>
            </div>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "¡Mensaje enviado exitosamente! Te responderemos pronto.",
    }
  } catch (error) {
    console.error("Error enviando mensaje:", error)
    return {
      success: false,
      message: "Error al enviar el mensaje. Por favor intenta nuevamente.",
    }
  }
}
