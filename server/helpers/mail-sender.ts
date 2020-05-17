import * as Mailgun from 'mailgun-js';

export const sendMail = async ({
    to,
    subject,
    content
}) => {
    const domain = process.env.MAILGUN_DOMAIN;
    const from = process.env.NO_REPLY_EMAIL;
    const apiKey = process.env.MAILGUN_PRIVATE_KEY;
    const mailgun = Mailgun({
        apiKey, domain
    });

    return new Promise((res, rej) => {
        mailgun.messages().send({
            from,
            to,
            subject,
            text: content,
            html: content,
        }, (err, result) => {
            if (err) {
                return rej(err);
            }
            return res();
        });
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