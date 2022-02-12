import { Request, Response } from 'express'
import { connection } from '../connection'
import { getAddress } from '../services/getAddress'
import mailTransporter from '../services/transporter'


export const createUserAddress = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {
        const cep = req.body.cep
        const number = req.body.number as number
        const supplement = req.body.supplement as string
        const address = await getAddress(cep)

        await connection("aula_services_address")
            .insert({
                cep,
                street: address?.street,
                number,
                supplement,
                neightborhood: address?.neightborhood,
                city: address?.city,
                state: address?.state
            })

        if (!address) {
            errorCode = 422
            throw new Error("Something went wrong. Check if 'cep' is correct.")
        }

        const email = "g6e8k2i3m1o7e5d9@labenualunos.slack.com"

        await mailTransporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: "Aula service-backend",
            text: `Olá, ${email}! O objeto usado para realizar o envio desse email foi o mailTransporter.sendMai({
                from: meu email, to: seu email, subject: assunto da aula, text: corpo do email, html: corpo do email
            }) `,
            html: `<p>Olá, ${email}! O objeto usado para realizar o envio desse email foi o mailTransporter.sendMai({
                from: meu email, to: seu email, subject: assunto da aula, text: corpo do email, html: corpo do email
            })</p>`
        })

        res.status(201).send({ message: "Address created successfuly" })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}