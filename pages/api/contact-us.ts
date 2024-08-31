import { generateHubspotCli } from '../../lib/crm/hubspot/client';
import { CompanyHubspotService } from '../../lib/crm/hubspot/resources/company';
import { ContactHubspotService } from '../../lib/crm/hubspot/resources/contacts';
import { sendMailToAdministrative } from '../../server/helpers/mail-sender'

interface IContactFormDto {
    email: string;
    fullname: string;
    company: string;
    phone: string;
    city?: string;
    website?: string;
}

export default async (req, res) => {
    if (req.method === 'POST') {
        await sendEmail(req.body);

        res.status(200).json({
            success: true
        });
        return;
    }

    return res.status(404);
}


const sendEmail = async (body) => {
    const {
        fullname,
    } = body;

    const subject = 'Website contact form - ' + fullname;
    const content = JSON.stringify(body);
    await sendMailToAdministrative({
        subject,
        content
    });
}