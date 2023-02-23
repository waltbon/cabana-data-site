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
        try {
            await sendToHubspotCRM(req.body);
        } catch (error) {
            
        }
        res.status(200).json({
            success: true
        });
        return;
    }

    return res.status(404);
}

const sendToHubspotCRM = async (data: IContactFormDto) => {
    const hubspotCli = generateHubspotCli();
    const contactService = new ContactHubspotService(hubspotCli);
    const nameSplitted = data.fullname.split(' ');
    const firstname = nameSplitted[0];
    const lastname = nameSplitted.length > 1 ? nameSplitted[1] : '';
    const contact = await contactService.create({
        ...data,
        firstname,
        lastname,
    });

    const companyService = new CompanyHubspotService(hubspotCli);
    const company = await companyService.create({
        domain: data.website || data.company,
        name: data.company,
    });

    await companyService.addContact(company, contact);

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