import { sendMail, sendMailToAdministrative } from '../../server/helpers/mail-sender'

export default async (req, res) => {
    console.log("req", req.body);

    switch (req.method) {
        case 'POST':
            await doPost(req.body);
            return res.status(200).json({
                success: true
            });
            break;
    
        default:
            break;
    }   
}

async function doPost(body) {
    const {
        firstname,
        lastname
    } = body;

    const fullname = `${firstname} ${lastname}`.trim();
    const subject = 'Website contact form - ' + fullname;
    const content = JSON.stringify(body);
    await sendMailToAdministrative({
        subject,
        content
    });
}