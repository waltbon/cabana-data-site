import { generateHubspotCli } from '../../lib/crm/hubspot/client';
import { CompanyHubspotService } from '../../lib/crm/hubspot/resources/company';
import { ContactHubspotService } from '../../lib/crm/hubspot/resources/contacts';
import { sendMailToAdministrative } from '../../server/helpers/mail-sender'

interface IContactFormDto {
    email: string;
    firstname: string;
    lastname: string;
    company: string;
    phone: string;
    city?: string;
    website?: string;
}

export default async (req, res) => {
    if (req.method === 'POST') {
        await sendToHubspotCRM(req.body);
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
    const contact = await contactService.create(data);

    const companyService = new CompanyHubspotService(hubspotCli);
    const company = await companyService.create({
        domain: data.website || data.company,
        name: data.company,
    });

    await companyService.addContact(company, contact);

}

async function doPostOLD_VERSION(body) {
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