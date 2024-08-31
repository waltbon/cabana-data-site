import Mailgun from 'mailgun.js';
import FormData from 'form-data';

export const sendMail = async ({
    to,
    subject,
    content
}) => {
    const domain = process.env.MAILGUN_DOMAIN;
    const from = process.env.NO_REPLY_EMAIL;
    const key = process.env.MAILGUN_PRIVATE_KEY as string;
    const mailgun = new Mailgun(FormData);

    const mg = mailgun.client({
        key,
        username: 'wbonillacr@gmail.com'
    });

    await mg.messages.create(domain, {
        from,
        to,
        subject,
        text: content,
        html: content,
    });
}

export const sendMailToAdministrative = async({
    subject,
    content
}) => {
    const adminMailinglist = process.env.MAILGUN_ADMIN_MAILING_LIST; 
    await sendMail({
        to: adminMailinglist,
        subject,
        content
    });
}